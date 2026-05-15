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
    title: 'WS-GRPO: Weakly-Supervised Group-Relative Policy Optimization for Rollout-Efficient Reasoning',
    authors: 'Gagan Mundada, Zihan Huang, Rohan Surana, <strong>Sheldon Yu</strong>, Jennifer Yuntong Zhang, Xintong Li, Tong Yu, Lina Yao, Jingbo Shang, Julian McAuley, Junda Wu',
    venue: 'arXiv preprint',
    year: '2026',
    pdfUrl: 'https://arxiv.org/abs/2602.17025',
    description: `This work proposes a weakly-supervised variant of GRPO that converts terminal rewards into prefix-level continue/stop guidance, cutting rollout length while remaining competitive with GRPO baselines on reasoning benchmarks.`
  },
  {
    id: 'pub-2',
    title: 'MASS-DPO: Multi-negative Active Sample Selection for Direct Policy Optimization',
    authors: 'Rohan Surana, Xintong Li, <strong>Sheldon Yu</strong>, Yiran Jenny Shen, Chuhan Wang, Tong Yu, Prithviraj Ammanabrolu, Jingbo Shang, Julian McAuley, Junda Wu',
    venue: 'arXiv preprint',
    year: '2026',
    pdfUrl: 'https://arxiv.org/abs/2605.10784',
    description: `This paper derives a Plackett-Luce Fisher-information objective to actively select compact, informative negative subsets for DPO, matching or beating prior multi-negative methods with substantially fewer negatives.`
  },
  {
    id: 'pub-3',
    title: 'Generate, Filter, Control, Replay: A Comprehensive Survey of Rollout Strategies for LLM Reinforcement Learning',
    authors: 'Rohan Surana, Gagan Mundada, Xunyi Jiang, Chuhan Wang, Zhenwei Tang, Difan Jiao, Zihan Huang, Yuxin Xiong, Junda Wu, <strong>Sheldon Yu</strong>, Xintong Li, Raghav Jain, Nikki Kuang, Sizhe Zhou, Bowen Jin, Zhendong Chu, Tong Yu, Ryan Rossi, Kuan-Hao Huang, Jingbo Shang, Jiawei Han, Julian McAuley',
    venue: 'arXiv preprint',
    year: '2026',
    pdfUrl: 'https://arxiv.org/abs/2605.02913',
    description: `This survey introduces a Generate-Filter-Control-Replay lifecycle taxonomy for rollout strategies in RL post-training of reasoning LLMs, unifying disparate methods under a single optimizer-agnostic framework.`
  },
  {
    id: 'pub-4',
    title: 'A Low-Latency Fraud Detection Layer for Detecting Adversarial Interaction Patterns in LLM-Powered Agents',
    authors: '<strong>Sheldon Yu</strong>, Yingcheng Sun, Hanqing Guo, Julian McAuley, Qianqian Tong',
    venue: 'arXiv preprint',
    year: '2026',
    pdfUrl: 'https://arxiv.org/abs/2605.01143',
    description: `This work models adversarial risk across multi-turn agent trajectories using lightweight structured features, achieving over 9x lower latency than LLM-based detectors while flagging gradual prompt-injection and escalation attacks.`
  },
  {
    id: 'pub-5',
    title: 'ECO-GEO: Experimentation-Augmented Content Optimization for Generative Engine Optimization',
    authors: '<strong>Sheldon Yu</strong>, Rui Wang, Tong Yu, Sungchul Kim, Junda Wu, Julian McAuley',
    venue: 'Under review',
    year: '2025',
    description: `This work introduces a framework for optimizing web content for AI-powered search engines through experimentation-augmented methods, advancing the emerging field of Generative Engine Optimization.`
  },
  {
    id: 'pub-6',
    title: 'Towards Agentic Recommender Systems in the Era of Multimodal Large Language Models',
    authors: 'Chengkai Huang, Junda Wu, Yu Xia, <strong>Sheldon Yu</strong>, Ruhan Wang, Tong Yu, Ruiyi Zhang, Ryan Rossi, Branislav Kveton, Dongruo Zhou, Julian McAuley, Lina Yao',
    venue: 'Technical Report',
    year: '2025',
    pdfUrl: 'https://arxiv.org/pdf/2503.16734',
    description: `This report surveys emerging paradigms for building autonomous recommendation agents with multimodal LLMs, outlining challenges and directions for next-generation recommender systems.`
  },
  {
    id: 'pub-7',
    title: 'CTRLs: Chain-of-Thought Reasoning via Latent State-Transition',
    authors: 'Junda Wu, Yuxin Xiong, Xintong Li, <strong>Sheldon Yu</strong>, Zhengmian Hu, Tong Yu, Rui Wang, Xiang Chen, Jingbo Shang, Julian McAuley',
    venue: 'arXiv preprint',
    year: '2025',
    pdfUrl: 'https://arxiv.org/abs/2507.08182',
    description: `This paper formulates CoT reasoning as an MDP with latent state transitions, enabling principled exploration via distributional RL and improving reasoning accuracy, diversity, and exploration efficiency without fine-tuning the base LLM.`
  },
  {
    id: 'pub-8',
    title: 'Explainable Chain-of-Thought Reasoning: An Empirical Analysis on State-Aware Reasoning Dynamics',
    authors: '<strong>Sheldon Yu</strong>, Yuxin Xiong, Junda Wu, Xintong Li, Tong Yu, Xiang Chen, Ritwik Sinha, Jingbo Shang, Julian McAuley',
    venue: 'EMNLP',
    year: '2025',
    pdfUrl: 'https://arxiv.org/pdf/2509.00190v1',
    description: `This paper investigates chain-of-thought reasoning dynamics in LLMs through state-aware analysis, revealing insights into the interpretability of multi-step reasoning processes.`
  },
  {
    id: 'pub-9',
    title: 'Improving Multi-Candidate Speculative Decoding',
    authors: 'Xiaofan Lu, Yixiao Zeng, Feiyang Ma, <strong>Sheldon Yu</strong>, Marco Levorato',
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
  title = '2 Publications',
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
              2.{publicationNumber} {pub.title}
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
