import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PDFViewer } from './components/PDFViewer';

const TOTAL_PAGES = 3;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(135);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sectionToScroll, setSectionToScroll] = useState<string | undefined>();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setZoom(newZoom);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = (page: number, sectionId: string) => {
    setCurrentPage(page);
    setSectionToScroll(sectionId);
  };

  const handleSectionScrolled = useCallback(() => {
    setSectionToScroll(undefined);
  }, []);

  return (
    <div className="arxiv-app">
      <Header
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        zoom={zoom}
        onPageChange={handlePageChange}
        onZoomChange={handleZoomChange}
        onToggleSidebar={handleToggleSidebar}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="main-container">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        
        <PDFViewer
          currentPage={currentPage}
          zoom={zoom}
          sectionToScroll={sectionToScroll}
          onSectionScrolled={handleSectionScrolled}
          onPageChange={handlePageChange}
          onZoomChange={handleZoomChange}
        />
      </div>
    </div>
  );
}

export default App;

