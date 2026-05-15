import React from 'react';

const educationCitations: Record<string, string> = {
  '[1]': 'https://cseweb.ucsd.edu/~jmcauley/',
  '[4]': 'https://joshuawu1997.github.io/#about-me',
  '[5]': 'https://www.linkedin.com/in/rohansurana28/',
  '[6]': 'https://www.linkedin.com/in/gaganmundada/',
  '[7]': 'https://www.linkedin.com/in/xunyi-jiang/',
  '[8]': 'https://nora1323.github.io/',
  '[9]': 'https://karpathy.ai/',
  '[10]': 'https://arxiv.org/abs/1706.03762',
  '[11]': 'https://www.linkedin.com/in/yixiao-jack-zeng-65948a183/',
  '[12]': 'https://www.linkedin.com/in/feiyang-ma-838856222/',
  '[13]': 'https://www.linkedin.com/in/xiaofan-lu-0b57b3205/',
};

const phdParagraph =
  'Sheldon is currently pursuing doctoral studies under the supervision of Prof. Julian McAuley[1], ' +
  'focusing on research at the intersection of large language model reasoning, efficient inference, ' +
  'and recommender systems. He has been working closely with Junda Wu[4], Rohan Surana[5], ' +
  'Gagan Mundada[6], Xunyi Jiang[7], and Yuxin Xiong[8].';

const bsParagraph =
  'Prior to doctoral studies, Sheldon completed undergraduate education at UC Irvine, where he ' +
  'started his career in research by watching all Andrej Karpathy’s[9] YouTube videos and ' +
  'reading Attention Is All You Need[10] for countless times. In IASL Lab, Sheldon was fortunate ' +
  'to work closely with Yixiao Zeng[11], Feiyang Ma[12], and Xiaofan Lu[13] on transformer ' +
  'architectures and speculative decoding. This undergraduate research resulted in publications ' +
  'on improving LLM inference speed, establishing the technical foundation for subsequent ' +
  'graduate research. The transition from undergraduate to doctoral studies reflects a continued ' +
  'commitment to advancing the field of natural language processing and machine learning.';

const renderWithCitations = (text: string) =>
  text.split(/(\[\d+\])/g).map((part, index) => {
    const href = educationCitations[part];
    if (!href) {
      return <React.Fragment key={`edu-text-${index}`}>{part}</React.Fragment>;
    }
    return (
      <a
        key={`edu-citation-${index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    );
  });

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="paper-section paper-intro">
      <h2 className="section-title">1 Education</h2>

      <div className="intro-content">
        <p id="edu-phd">
          <strong>Ph.D. in Computer Science, University of California, San Diego (2024–Present).</strong>{' '}
          {renderWithCitations(phdParagraph)}
        </p>
        <p id="edu-bs">
          <strong>B.S. in Computer Science, University of California, Irvine (2022–2024).</strong>{' '}
          {renderWithCitations(bsParagraph)}
        </p>
      </div>
    </section>
  );
};
