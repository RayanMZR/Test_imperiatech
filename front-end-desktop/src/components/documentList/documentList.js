import React, { useState, useEffect } from 'react';
import PdfViewer from '../pdfViewer/PdfViewer';

const DocumentList = ({ refresh }) => {
  const [document, setDocuments] = useState([]);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState(null);

  const displayDocuments = async () => {
    const token = localStorage.getItem('access_token');
    try {
      const response = await fetch('http://localhost:8000/api/document/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        setDocuments(res);
      } else {
        setError("Error loading document");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error loading document");
    }
  };

  useEffect(() => {
    displayDocuments();
  }, [refresh]); 

  const handleDelete = async (id) => {
    const token = localStorage.getItem('access_token');
    try {
      const response = await fetch(`http://localhost:8000/api/document/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setDocuments(document.filter(doc => doc.id !== id));
      } else {
        console.error("Erreur lors de la suppression du document.");
      }
    } catch (err) {
      console.error("Erreur lors de la suppression du document:", err);
    }
  };

  const handleSee = (doc) => {
    console.log(doc.file);
    setPdfUrl(doc.file);
  }

  const handleClose = () => {
    setPdfUrl(null);
  }

  return (
    <div className="document-list-container">
      <h2>My Documents</h2>
      {error && <p className="error">{error}</p>}
      {document.length === 0 ? (
        <p>No documents available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>File name</th>
              <th>Upload date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {document.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{new Date(doc.upload_date).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleSee(doc)}>View</button>
                  <button onClick={() => handleDelete(doc.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {pdfUrl && (
        <PdfViewer pdfUrl={pdfUrl} onClose={handleClose} />
      )}
    </div>
  );
};

export default DocumentList;
