import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="paper-section paper-intro">
      <h2 className="section-title">1 Education</h2>
      
      <div className="intro-content">
        <p id="edu-phd">
          <strong>Ph.D. in Computer Science, University of California, San Diego (2024–Present).</strong> The author is currently pursuing doctoral studies under the supervision of Prof. Julian McAuley, focusing on research at the intersection of large language models, efficient inference, and multimodal learning. The doctoral research aims to develop novel methods for controlling and optimizing LLM reasoning processes, with particular emphasis on chain-of-thought dynamics and generative engine optimization. This work builds upon a foundation of practical experience in both academic and industrial research settings.
        </p>
        <p id="edu-bs">
          <strong>B.S. in Computer Science, University of California, Irvine (2022–2024).</strong> Prior to doctoral studies, the author completed undergraduate education at UC Irvine, where foundational work in transformer architectures and speculative decoding was conducted under the guidance of Prof. Marco Levorato. This undergraduate research resulted in publications on improving LLM inference speed, establishing the technical foundation for subsequent graduate research. The transition from undergraduate to doctoral studies reflects a continued commitment to advancing the field of natural language processing and machine learning.
        </p>
      </div>
    </section>
  );
};

