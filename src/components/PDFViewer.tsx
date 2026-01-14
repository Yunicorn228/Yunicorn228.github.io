import React, { useRef, useEffect, useCallback } from 'react';
import { PDFPage } from './PDFPage';
import { TitlePage } from './content/TitlePage';
import { EducationSection } from './content/EducationSection';
import { PublicationsSection } from './content/PublicationsSection';
import { ExperienceSection } from './content/ExperienceSection';
import { ReferencesSection } from './content/ReferencesSection';
import { cvData } from '../data/cv-data';

interface PDFViewerProps {
  currentPage: number;
  zoom: number;
  sectionToScroll?: string;
  onSectionScrolled: () => void;
  onPageChange: (page: number) => void;
  onZoomChange: (zoom: number) => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({
  zoom,
  sectionToScroll,
  onSectionScrolled,
  onPageChange,
  onZoomChange,
}) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionToScroll && viewerRef.current) {
      const element = document.getElementById(sectionToScroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onSectionScrolled();
      }
    }
  }, [sectionToScroll, onSectionScrolled]);

  // Update current page based on scroll position
  const handleScroll = useCallback(() => {
    if (!viewerRef.current) return;
    
    const viewerRect = viewerRef.current.getBoundingClientRect();
    const viewerCenter = viewerRect.top + viewerRect.height / 3;
    
    for (let i = 0; i < pageRefs.current.length; i++) {
      const pageEl = pageRefs.current[i];
      if (pageEl) {
        const pageRect = pageEl.getBoundingClientRect();
        if (pageRect.top <= viewerCenter && pageRect.bottom > viewerCenter) {
          onPageChange(i + 1);
          break;
        }
      }
    }
  }, [onPageChange]);

  // Handle pinch-to-zoom on trackpad
  const handleWheel = useCallback((e: WheelEvent) => {
    // Pinch gesture on Mac trackpad sends wheel events with ctrlKey
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = -e.deltaY;
      const zoomSpeed = 2;
      const newZoom = Math.min(300, Math.max(25, zoom + delta * zoomSpeed));
      onZoomChange(Math.round(newZoom));
    }
  }, [zoom, onZoomChange]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (viewer) {
      viewer.addEventListener('scroll', handleScroll);
      viewer.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        viewer.removeEventListener('scroll', handleScroll);
        viewer.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleScroll, handleWheel]);

  return (
    <div className="pdf-viewer" ref={viewerRef}>
      <div className="pdf-pages-container" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}>
        {/* Page 1: Title, Abstract, and Education */}
        <div ref={el => pageRefs.current[0] = el}>
          <PDFPage
            pageNumber={1}
            arxivId={cvData.arxivId}
            arxivCategory={cvData.arxivCategory}
            arxivDate={cvData.arxivDate}
          >
            <TitlePage />
            <EducationSection />
          </PDFPage>
        </div>

        {/* Page 2: Publications */}
        <div ref={el => pageRefs.current[1] = el}>
          <PDFPage
            pageNumber={2}
            arxivId={cvData.arxivId}
            arxivCategory={cvData.arxivCategory}
            arxivDate={cvData.arxivDate}
          >
            <PublicationsSection />
          </PDFPage>
        </div>

        {/* Page 3: Experience and References */}
        <div ref={el => pageRefs.current[2] = el}>
          <PDFPage
            pageNumber={3}
            arxivId={cvData.arxivId}
            arxivCategory={cvData.arxivCategory}
            arxivDate={cvData.arxivDate}
          >
            <ExperienceSection />
            <ReferencesSection />
          </PDFPage>
        </div>
      </div>
    </div>
  );
};

