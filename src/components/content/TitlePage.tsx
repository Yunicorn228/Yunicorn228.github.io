import React from 'react';
import { cvData } from '../../data/cv-data';

export const TitlePage: React.FC = () => {
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

      {/* Abstract */}
      <section id="abstract" className="paper-section">
        <h2 className="section-title">Abstract</h2>
        <div className="abstract-content">
          <p>{cvData.abstract}</p>
        </div>
      </section>
    </div>
  );
};

