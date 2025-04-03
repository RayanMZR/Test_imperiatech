import React from 'react';
import './pdfViewer.css';

const PdfViewer = ({ pdfUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
