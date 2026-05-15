export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  pdfUrl?: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  supervisor?: string;
  description: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  advisor?: string;
}

export const cvData = {
  name: "Sheldon Yu",
  email: "ziy040@ucsd.edu",
  phone: "(347)654-7566",
  homepage: "https://yusheldon.netlify.app/",
  googleScholar: "https://scholar.google.com/citations?user=ULsTH1UAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/sheldon-yu-89b019118/",
  github: "https://github.com/Yunicorn228",
  
  arxivId: "3476.547566",
  arxivCategory: "cs.CL",
  arxivDate: "28 Feb 1997",
  
  paperTitle: "Understanding Sheldon Yu: A Comprehensive Survey",
  
  abstract: `This paper-inspired personal website offers a concise overview of Sheldon Yu, a second-year Ph.D. student in Computer Science at the University of California, San Diego, advised by Prof. Julian McAuley[1]. His research interests include recommender systems, reasoning in large language models, and agentic systems. Prior to beginning his doctoral studies, he worked as an undergraduate student researcher in the IASL Lab under the guidance of Prof. Marco Levorato[2]. Even earlier, before entering academia, he served in the United States Marine Corps[3] and attained the rank of Sergeant—perhaps he did not find enough suffering there, which ultimately led him to a Ph.D. program. As a married man. With a kid too. He welcomes inquiries regarding research collaborations, as well as conversations about life, purpose, and the pursuit of meaningful problems.`,
  abstractCitations: {
    "[1]": "https://cseweb.ucsd.edu/~jmcauley/",
    "[2]": "https://iasl.ics.uci.edu/people/",
    "[3]": "https://www.marines.com/"
  },

  education: [
    {
      institution: "University of California, San Diego",
      location: "San Diego, USA",
      degree: "Ph.D. in Computer Science",
      startDate: "Sep. 2024",
      endDate: "Present",
      advisor: "Prof. Julian McAuley"
    },
    {
      institution: "University of California, Irvine",
      location: "Irvine, USA",
      degree: "B.S. in Computer Science",
      startDate: "Sep. 2022",
      endDate: "Jun. 2024"
    }
  ] as Education[],

  publications: [
    {
      authors: "Sheldon Yu, Rui Wang, Tong Yu, Sungchul Kim, Junda Wu, Julian McAuley",
      title: "ECO-GEO: Experimentation-Augmented Content Optimization for Generative Engine Optimization",
      venue: "Under review",
      year: "2025"
    },
    {
      authors: "Sheldon Yu, Yuxin Xiong, Junda Wu, Xintong Li, Tong Yu, Xiang Chen, Ritwik Sinha, Jingbo Shang, Julian McAuley",
      title: "Explainable Chain-of-Thought Reasoning: An Empirical Analysis on State-Aware Reasoning Dynamics",
      venue: "EMNLP",
      year: "2025",
      pdfUrl: "https://arxiv.org/pdf/2509.00190v1"
    },
    {
      authors: "Chengkai Huang, Junda Wu, Yu Xia, Sheldon Yu, Ruhan Wang, Tong Yu, Ruiyi Zhang, Ryan Rossi, Branislav Kveton, Dongruo Zhou, Julian McAuley, Lina Yao",
      title: "Towards Agentic Recommender Systems in the Era of Multimodal Large Language Models",
      venue: "Technical Report",
      year: "2025",
      pdfUrl: "https://arxiv.org/pdf/2503.16734"
    },
    {
      authors: "Xiaofan Lu, Yixiao Zeng, Feiyang Ma, Zixu Yu, Marco Levorato",
      title: "Improving Multi-Candidate Speculative Decoding",
      venue: "NeurIPS",
      year: "2024",
      pdfUrl: "https://arxiv.org/pdf/2409.10644"
    }
  ] as Publication[],

  experience: [
    {
      title: "Research Scientist Intern",
      organization: "Adobe Research",
      location: "San Jose, CA",
      startDate: "Jun. 2025",
      endDate: "Dec. 2025",
      supervisor: "Dr. Rui Wang, Dr. Tong Yu, Dr. Sungchul Kim",
      description: [
        "Post training the LLM model to inherit the black-box model preference and optimize Generative Engine and LLM response on target content"
      ]
    },
    {
      title: "Student Researcher",
      organization: "Caltech",
      location: "Pasadena, CA",
      startDate: "Jun. 2024",
      endDate: "Sep. 2024",
      supervisor: "Prof. Richard M. Murray",
      description: [
        "Developed a contrastive learning model to identify virus functions and families, utilizing both genetic and structural features"
      ]
    },
    {
      title: "Undergraduate Student Researcher",
      organization: "University of California, Irvine",
      location: "Irvine, CA",
      startDate: "Feb. 2023",
      endDate: "Sep. 2024",
      supervisor: "Prof. Marco Levorato",
      description: [
        "Focused on transformers, leading to a published paper on improving LLM model inference speed"
      ]
    },
    {
      title: "Summer Research Intern",
      organization: "Naval Information Warfare Center Pacific (NIWCP)",
      location: "San Diego, CA",
      startDate: "Jun. 2023",
      endDate: "Sep. 2023",
      description: [
        "Tasked with enhancing the model to fortify naval warship communication and data transmission security"
      ]
    },
    {
      title: "Sergeant of Marine",
      organization: "United States Marine Corps",
      location: "Oceanside, CA",
      startDate: "Sep. 2015",
      endDate: "Dec. 2019",
      description: [
        "Oversaw 12 U.S. Marines' daily training and monthly 1-on-1 counseling during the 6 month overseas deployment"
      ]
    }
  ] as Experience[],

  technicalSkills: {
    languages: ["Python", "JavaScript", "C/C++"],
    frameworks: ["PyTorch"]
  }
};
