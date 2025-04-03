import React from 'react';
import './pdfViewer.css';

const PdfViewer = ({ pdfUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        </button>
        <iframe
          src={pdfUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
