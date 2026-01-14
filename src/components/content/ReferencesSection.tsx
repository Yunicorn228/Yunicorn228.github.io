import React from 'react';

export const ReferencesSection: React.FC = () => {
  const references = [
    {
      id: 1,
      authors: 'J. Wei, X. Wang, D. Schuurmans, M. Bosma, B. Ichter, F. Xia, E. Chi, Q. Le, and D. Zhou',
      title: 'Chain-of-thought prompting elicits reasoning in large language models',
      venue: 'NeurIPS',
      year: '2022'
    },
    {
      id: 2,
      authors: 'Y. Leviathan, M. Kalman, and Y. Matias',
      title: 'Fast inference from transformers via speculative decoding',
      venue: 'ICML',
      year: '2023'
    },
    {
      id: 3,
      authors: 'A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin',
      title: 'Attention is all you need',
      venue: 'NeurIPS',
      year: '2017'
    },
    {
      id: 4,
      authors: 'T. Brown, B. Mann, N. Ryder, M. Subbiah, J. Kaplan, P. Dhariwal, et al.',
      title: 'Language models are few-shot learners',
      venue: 'NeurIPS',
      year: '2020'
    },
    {
      id: 5,
      authors: 'H. Touvron, T. Lavril, G. Izacard, X. Martinet, M. Lachaux, T. Lacroix, et al.',
      title: 'LLaMA: Open and efficient foundation language models',
      venue: 'arXiv preprint',
      year: '2023'
    },
    {
      id: 6,
      authors: 'OpenAI',
      title: 'GPT-4 technical report',
      venue: 'arXiv preprint',
      year: '2023'
    },
    {
      id: 7,
      authors: 'DeepSeek-AI',
      title: 'DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning',
      venue: 'arXiv preprint',
      year: '2025'
    },
    {
      id: 8,
      authors: 'J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, et al.',
      title: 'GPT-4o system card',
      venue: 'OpenAI Technical Report',
      year: '2024'
    }
  ];

  return (
    <section id="references" className="paper-section">
      <h2 className="section-title">4 References</h2>
      
      <div className="references-list">
        {references.map((ref) => (
          <div key={ref.id} className="reference-item">
            <span className="ref-number">[{ref.id}]</span>
            <span className="ref-content">
              {ref.authors}. "{ref.title}." <em>{ref.venue}</em>, {ref.year}.
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

