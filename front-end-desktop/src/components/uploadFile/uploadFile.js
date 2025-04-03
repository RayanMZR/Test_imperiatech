import React, { useState } from 'react';
import './uploadFile.css';

const UploadFile = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const FileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('access_token');
    try {
      const response = await fetch('http://localhost:8000/api/document/upload/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        onUploadSuccess();
      } else {
        setError("Error while uploading");
      }
    } catch (err) {
      console.error("Error while uploading", err);
      setError("Error while uploading, please try again");
    }
  };

  return (
    <div className="upload-form-container">
      <h2>Upload a PDF</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={FileChange} 
          required 
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadFile;
