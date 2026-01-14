import React from 'react';

interface PDFPageProps {
  pageNumber: number;
  arxivId: string;
  arxivCategory: string;
  arxivDate: string;
  children: React.ReactNode;
}

export const PDFPage: React.FC<PDFPageProps> = ({
  pageNumber,
  arxivId,
  arxivCategory,
  arxivDate,
  children,
}) => {
  return (
    <div className="pdf-page-wrapper">
      <div className="pdf-page" data-page={pageNumber}>
        {/* arXiv watermark in left margin - only on first page */}
        {pageNumber === 1 && (
          <div className="arxiv-watermark">
            <div className="arxiv-id">{arxivId}</div>
            <div className="arxiv-category">[{arxivCategory}]</div>
            <div className="arxiv-date">{arxivDate}</div>
          </div>
        )}
        
        {/* Page content */}
        <div className="page-content">
          {children}
        </div>
        
        {/* Page number */}
        <div className="page-number">{pageNumber}</div>
      </div>
    </div>
  );
};

