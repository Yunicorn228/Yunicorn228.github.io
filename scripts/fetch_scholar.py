"""Fetch all publications from a Google Scholar profile and dump them as JSON.

Usage:
    python fetch_scholar.py                 # uses the default profile below
    python fetch_scholar.py --user <ID>     # override the Scholar user id
    python fetch_scholar.py --out path.json # override the output path

Notes:
    - Google Scholar has no official API and rate-limits aggressively.
      If `scholarly` starts failing with HTTP 429 / CAPTCHA, wait a while
      or route through a proxy. See: https://scholarly.readthedocs.io/
    - This emits raw scraped data. Merge into PublicationsSection.tsx by hand
      so manually curated fields (bolded authors, descriptions, custom pdfUrl)
      are preserved.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

try:
    from scholarly import scholarly
except ImportError:
    sys.stderr.write(
        "scholarly is not installed. Run:\n"
        "    pip install scholarly\n"
    )
    sys.exit(1)


DEFAULT_USER_ID = "ULsTH1UAAAAJ"
DEFAULT_OUTPUT = Path(__file__).resolve().parent.parent / "src" / "data" / "publications.json"


def fetch_publications(user_id: str) -> list[dict[str, Any]]:
    author = scholarly.search_author_id(user_id)
    author = scholarly.fill(author, sections=["publications"])

    publications: list[dict[str, Any]] = []
    for index, raw in enumerate(author.get("publications", []), start=1):
        filled = scholarly.fill(raw)
        bib = filled.get("bib", {})

        publications.append(
            {
                "id": f"pub-{index}",
                "title": bib.get("title", "").strip(),
                "authors": bib.get("author", "").strip(),
                "venue": (
                    bib.get("journal")
                    or bib.get("conference")
                    or bib.get("booktitle")
                    or bib.get("publisher")
                    or ""
                ).strip(),
                "year": str(bib.get("pub_year", "")).strip(),
                "abstract": bib.get("abstract", "").strip(),
                "pdfUrl": filled.get("eprint_url") or filled.get("pub_url") or None,
                "numCitations": filled.get("num_citations", 0),
                "scholarUrl": (
                    f"https://scholar.google.com/citations?view_op=view_citation"
                    f"&hl=en&user={user_id}&citation_for_view="
                    f"{filled.get('author_pub_id', '')}"
                ),
            }
        )

    publications.sort(
        key=lambda p: (p["year"] or "0", p["numCitations"]),
        reverse=True,
    )
    return publications


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--user",
        default=DEFAULT_USER_ID,
        help=f"Google Scholar user id (default: {DEFAULT_USER_ID})",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output JSON path (default: {DEFAULT_OUTPUT})",
    )
    args = parser.parse_args()

    print(f"Fetching publications for user {args.user} ...", file=sys.stderr)
    publications = fetch_publications(args.user)
    print(f"Got {len(publications)} publications.", file=sys.stderr)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(publications, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {args.out}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
