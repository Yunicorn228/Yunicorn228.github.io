import React from 'react';
import { cvData } from '../../data/cv-data';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="paper-section">
      <h2 className="section-title">4 Technical Skills</h2>
      
      <div className="skills-content">
        <p>
          <strong>Programming Languages:</strong>{' '}
          {cvData.technicalSkills.languages.join(', ')}
        </p>
        <p>
          <strong>Frameworks:</strong>{' '}
          {cvData.technicalSkills.frameworks.join(', ')}
        </p>
      </div>
    </section>
  );
};

