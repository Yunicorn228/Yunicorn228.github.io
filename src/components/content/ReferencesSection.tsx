import React from 'react';

interface Reference {
  id: number;
  authors: string;
  title: string;
  venue: string;
  year: string;
  url: string;
}

const references: Reference[] = [
  {
    id: 1,
    authors: 'J. McAuley',
    title: 'Faculty homepage',
    venue: 'University of California, San Diego',
    year: '2026',
    url: 'https://cseweb.ucsd.edu/~jmcauley/',
  },
  {
    id: 2,
    authors: 'M. Levorato',
    title: 'Information, Adaptation, and Sensing Lab (IASL) — People',
    venue: 'University of California, Irvine',
    year: '2026',
    url: 'https://iasl.ics.uci.edu/people/',
  },
  {
    id: 3,
    authors: 'United States Marine Corps',
    title: 'Official website',
    venue: 'marines.com',
    year: '2026',
    url: 'https://www.marines.com/',
  },
  {
    id: 4,
    authors: 'J. Wu',
    title: 'Personal homepage',
    venue: 'University of California, San Diego',
    year: '2026',
    url: 'https://joshuawu1997.github.io/#about-me',
  },
  {
    id: 5,
    authors: 'R. Surana',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/rohansurana28/',
  },
  {
    id: 6,
    authors: 'G. Mundada',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/gaganmundada/',
  },
  {
    id: 7,
    authors: 'X. Jiang',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/xunyi-jiang/',
  },
  {
    id: 8,
    authors: 'Y. Xiong',
    title: 'Personal homepage',
    venue: 'University of California, San Diego',
    year: '2026',
    url: 'https://nora1323.github.io/',
  },
  {
    id: 9,
    authors: 'A. Karpathy',
    title: 'Personal homepage',
    venue: 'karpathy.ai',
    year: '2026',
    url: 'https://karpathy.ai/',
  },
  {
    id: 10,
    authors: 'A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin',
    title: 'Attention Is All You Need',
    venue: 'NeurIPS',
    year: '2017',
    url: 'https://arxiv.org/abs/1706.03762',
  },
  {
    id: 11,
    authors: 'Y. Zeng',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/yixiao-jack-zeng-65948a183/',
  },
  {
    id: 12,
    authors: 'F. Ma',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/feiyang-ma-838856222/',
  },
  {
    id: 13,
    authors: 'X. Lu',
    title: 'LinkedIn profile',
    venue: 'linkedin.com',
    year: '2026',
    url: 'https://www.linkedin.com/in/xiaofan-lu-0b57b3205/',
  },
];

export const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="paper-section">
      <h2 className="section-title">4 References</h2>

      <div className="references-list">
        {references.map((ref) => (
          <div key={ref.id} className="reference-item">
            <span className="ref-number">[{ref.id}]</span>
            <span className="ref-content">
              {ref.authors}. "{ref.title}." <em>{ref.venue}</em>, {ref.year}.{' '}
              <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {ref.url}
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
