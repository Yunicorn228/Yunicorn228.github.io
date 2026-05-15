# Scripts

## fetch_scholar.py

Pulls every publication off a Google Scholar profile and writes it to
`src/data/publications.json`.

### Setup (once)

```bash
cd website/scripts
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Run

```bash
python fetch_scholar.py
# or override the profile / output:
python fetch_scholar.py --user ULsTH1UAAAAJ --out ../src/data/publications.json
```

### Output

Each entry has:

| field          | source                                       |
|----------------|----------------------------------------------|
| `id`           | `pub-<n>` synthesized in fetch order         |
| `title`        | `bib.title`                                  |
| `authors`      | `bib.author` (raw, no bolding)               |
| `venue`        | first of `journal` / `conference` / `booktitle` / `publisher` |
| `year`         | `bib.pub_year`                               |
| `abstract`     | `bib.abstract` (often truncated by Scholar)  |
| `pdfUrl`       | `eprint_url` or `pub_url`                    |
| `numCitations` | citation count at fetch time                 |
| `scholarUrl`   | direct link back to the Scholar citation page |

Sorted by `year` desc, then by `numCitations` desc.

### Caveats

- Google Scholar has no official API and rate-limits aggressively. If you
  see `MaxTriesExceededException` / HTTP 429 / a CAPTCHA prompt, wait a
  while or use a proxy (see `scholarly.use_proxy(...)`).
- This emits raw scraped data. **Don't pipe it straight into the React
  component** — the current `PublicationsSection.tsx` has hand-curated
  fields (bolded author names, custom descriptions, preferred PDF URLs)
  that you'll want to keep. Merge by hand.
