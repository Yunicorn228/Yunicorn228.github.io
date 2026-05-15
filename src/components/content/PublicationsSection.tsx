import React from 'react';

interface PublicationsSectionProps {
  startIndex?: number;
  endIndex?: number;
  sectionId?: string;
  title?: string;
}

const publications = [
  {
    id: 'pub-1',
    title: 'ECO-GEO: Experimentation-Augmented Content Optimization for Generative Engine Optimization',
    authors: '<strong>Sheldon Yu</strong>, Rui Wang, Tong Yu, Sungchul Kim, Junda Wu, Julian McAuley',
    venue: 'Under review',
    year: '2025',
    description: `This work introduces a framework for optimizing web content for AI-powered search engines through experimentation-augmented methods, advancing the emerging field of Generative Engine Optimization.`
  },
  {
    id: 'pub-2',
    title: 'Explainable Chain-of-Thought Reasoning: An Empirical Analysis on State-Aware Reasoning Dynamics',
    authors: '<strong>Sheldon Yu</strong>, Yuxin Xiong, Junda Wu, Xintong Li, Tong Yu, Xiang Chen, Ritwik Sinha, Jingbo Shang, Julian McAuley',
    venue: 'EMNLP',
    year: '2025',
    pdfUrl: 'https://arxiv.org/pdf/2509.00190v1',
    description: `This paper investigates chain-of-thought reasoning dynamics in LLMs through state-aware analysis, revealing insights into the interpretability of multi-step reasoning processes.`
  },
  {
    id: 'pub-3',
    title: 'Towards Agentic Recommender Systems in the Era of Multimodal Large Language Models',
    authors: 'Chengkai Huang, Junda Wu, Yu Xia, <strong>Sheldon Yu</strong>, Ruhan Wang, Tong Yu, Ruiyi Zhang, Ryan Rossi, Branislav Kveton, Dongruo Zhou, Julian McAuley, Lina Yao',
    venue: 'Technical Report',
    year: '2025',
    pdfUrl: 'https://arxiv.org/pdf/2503.16734',
    description: `This report surveys emerging paradigms for building autonomous recommendation agents with multimodal LLMs, outlining challenges and directions for next-generation recommender systems.`
  },
  {
    id: 'pub-4',
    title: 'Improving Multi-Candidate Speculative Decoding',
    authors: 'Xiaofan Lu, Yixiao Zeng, Feiyang Ma, Zixu Yu, Marco Levorato',
    venue: 'NeurIPS',
    year: '2024',
    pdfUrl: 'https://arxiv.org/pdf/2409.10644',
    description: `This paper proposes improvements to speculative decoding for LLM inference acceleration, achieving significant speedups through multi-candidate draft-then-verify strategies.`
  }
];

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  startIndex = 0,
  endIndex = publications.length,
  sectionId = 'publications',
  title = '1 Publications',
}) => {
  const visiblePublications = publications.slice(startIndex, endIndex);

  return (
    <section id={sectionId} className="paper-section paper-intro">
      {title && <h2 className="section-title">{title}</h2>}
      
      <div className="publications-subsections">
        {visiblePublications.map((pub, index) => {
          const publicationNumber = startIndex + index + 1;
          return (
          <div key={pub.id} id={pub.id} className="pub-subsection">
            <h3 className="subsection-title">
              1.{publicationNumber} {pub.title}
              {pub.pdfUrl && (
                <a 
                  href={pub.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pub-pdf-link"
                >
                  [PDF]
                </a>
              )}
            </h3>
            <p className="pub-authors-line" dangerouslySetInnerHTML={{ __html: `${pub.authors}. <em>${pub.venue}</em>, ${pub.year}.` }} />
            <p className="pub-description-text">
              {pub.description}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
};
