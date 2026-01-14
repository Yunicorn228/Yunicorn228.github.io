import React from 'react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'exp-adobe',
      org: 'Adobe Research',
      dates: 'Jun. 2025 – Dec. 2025',
      description: `As a Research Scientist Intern at Adobe Research, the author conducted research on post-training methodologies for large language models under the supervision of Dr. Rui Wang, Dr. Tong Yu, and Dr. Sungchul Kim. The primary focus involved developing techniques to enable LLMs to inherit preferences from black-box models, with applications to Generative Engine Optimization (GEO). This work contributed to novel approaches for optimizing LLM responses toward target content without requiring access to proprietary model weights.`
    },
    {
      id: 'exp-caltech',
      org: 'California Institute of Technology',
      dates: 'Jun. 2024 – Sep. 2024',
      description: `During a research position at Caltech under the guidance of Prof. Richard M. Murray, the author developed contrastive learning models for computational biology applications. The research focused on identifying virus functions and classifying viral families by leveraging both genetic sequence data and protein structural features. This interdisciplinary work demonstrated the applicability of modern machine learning techniques to fundamental problems in molecular biology.`
    },
    {
      id: 'exp-uci',
      org: 'University of California, Irvine',
      dates: 'Feb. 2023 – Sep. 2024',
      description: `As an Undergraduate Student Researcher at UC Irvine, the author worked under the supervision of Prof. Marco Levorato on transformer architectures and efficient inference methods. This research culminated in a publication on improving multi-candidate speculative decoding at NeurIPS 2024, establishing foundational expertise in LLM inference optimization that continues to inform the author's doctoral research.`
    },
    {
      id: 'exp-navy',
      org: 'Naval Information Warfare Center Pacific',
      dates: 'Jun. 2023 – Sep. 2023',
      description: `During a Summer Research Internship at NIWCP, the author contributed to defense-related research focusing on secure communication systems. The work involved developing and enhancing machine learning models to fortify naval warship communication protocols and improve data transmission security in adversarial environments.`
    },
    {
      id: 'exp-usmc',
      org: 'United States Marine Corps',
      dates: 'Sep. 2015 – Dec. 2019',
      description: `Prior to pursuing academic research, the author served as a Sergeant in the United States Marine Corps, where leadership and organizational skills were developed through direct supervision of 12 Marines. Responsibilities included coordinating daily training operations and conducting monthly counseling sessions during a six-month overseas deployment, experiences that cultivated discipline and team management capabilities applicable to collaborative research environments.`
    }
  ];

  return (
    <section id="experience" className="paper-section paper-intro">
      <h2 className="section-title">3 Experience</h2>
      
      <div className="experience-subsections">
        {experiences.map((exp, index) => (
          <div key={index} id={exp.id} className="exp-subsection">
            <h3 className="subsection-title">
              3.{index + 1} {exp.org} ({exp.dates})
            </h3>
            <p className="exp-description-text">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

