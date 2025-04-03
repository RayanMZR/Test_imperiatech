import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadFile from '../uploadFile/uploadFile';
import DocumentList from '../documentList/documentList';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const successUpload = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-inner">
          <h1>Welcome</h1>
        </div>
      </header>
      <main className="home-main">
        <section className="upload-section">
          <UploadFile onUploadSuccess={successUpload} />
        </section>
        <section className="documents-section">
          <DocumentList refresh={refresh} />
        </section>
      </main>
    </div>
  );
};

export default Home;
