import React, { useState } from 'react';

interface TOCSection {
  id: string;
  title: string;
  page: number;
  subsections?: TOCSection[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  activeSection?: string;
  onNavigate: (page: number, sectionId: string) => void;
}

const tocData: TOCSection[] = [
  {
    id: 'abstract',
    title: 'Abstract',
    page: 1,
  },
  {
    id: 'education',
    title: 'Education',
    page: 2,
    subsections: [
      { id: 'edu-phd', title: 'Ph.D. in Computer Science', page: 2 },
      { id: 'edu-bs', title: 'B.S. in Computer Science', page: 2 },
    ],
  },
  {
    id: 'publications',
    title: 'Publications',
    page: 2,
    subsections: [
      { id: 'pub-1', title: 'ECO-GEO: Experimentation-Augmented...', page: 2 },
      { id: 'pub-2', title: 'Explainable Chain-of-Thought Reasoning...', page: 2 },
      { id: 'pub-3', title: 'Towards Agentic Recommender Systems...', page: 2 },
      { id: 'pub-4', title: 'Improving Multi-Candidate Speculative...', page: 2 },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    page: 3,
    subsections: [
      { id: 'exp-adobe', title: 'Adobe Research', page: 3 },
      { id: 'exp-caltech', title: 'Caltech', page: 3 },
      { id: 'exp-uci', title: 'UC Irvine', page: 3 },
      { id: 'exp-navy', title: 'NIWCP', page: 3 },
      { id: 'exp-usmc', title: 'United States Marine Corps', page: 3 },
    ],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeSection, onNavigate }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['education', 'publications', 'experience']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleNavigate = (page: number, sectionId: string) => {
    onNavigate(page, sectionId);
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <img src="/YU2023.jpeg" alt="Sheldon Yu" className="profile-image" />
        </div>
        
        <nav className="toc">
          {tocData.map((section) => (
            <div key={section.id} className="toc-section">
              <div 
                className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleNavigate(section.page, section.id)}
              >
                {section.subsections && (
                  <button 
                    className={`toc-toggle ${expandedSections.has(section.id) ? 'expanded' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection(section.id);
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
                <span className="toc-title">{section.title}</span>
              </div>
              
              {section.subsections && expandedSections.has(section.id) && (
                <div className="toc-subsections">
                  {section.subsections.map((sub) => (
                    <div 
                      key={sub.id}
                      className={`toc-item toc-subitem ${activeSection === sub.id ? 'active' : ''}`}
                      onClick={() => handleNavigate(sub.page, sub.id)}
                    >
                      <span className="toc-bullet">•</span>
                      <span className="toc-title">{sub.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

