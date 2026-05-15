import React from 'react';
import { cvData } from '../../data/cv-data';

export const TitlePage: React.FC = () => {
  const renderAbstractWithCitations = () => {
    const parts = cvData.abstract.split(/(\[\d+\])/g);

    return parts.map((part, index) => {
      const href = cvData.abstractCitations[part as keyof typeof cvData.abstractCitations];
      if (!href) {
        return <React.Fragment key={`abstract-text-${index}`}>{part}</React.Fragment>;
      }

      return (
        <a key={`abstract-citation-${index}`} href={href} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    });
  };

  return (
    <div className="title-page">
      {/* Paper Title */}
      <h1 className="paper-title">{cvData.paperTitle}</h1>
      
      {/* Author Block */}
      <div className="author-block">
        <div className="author">
          <span className="author-name">{cvData.name}</span>
          <span className="author-affiliation">University of California, San Diego</span>
          <a href={`mailto:${cvData.email}`} className="author-email">{cvData.email}</a>
        </div>
      </div>

      {/* Profile Links */}
      <div className="author-links">
        <a
          href={cvData.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          Google Scholar
        </a>
        <span className="author-link-separator">·</span>
        <a
          href={cvData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          LinkedIn
        </a>
        <span className="author-link-separator">·</span>
        <a
          href={cvData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          GitHub
        </a>
      </div>

      {/* Abstract */}
      <section id="abstract" className="paper-section">
        <h2 className="section-title">Abstract</h2>
        <div className="abstract-content">
          <p>{renderAbstractWithCitations()}</p>
        </div>
      </section>
    </div>
  );
};
