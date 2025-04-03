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
        <h1>Welcolm</h1>
      </header>
      <main className="home-main">
        <UploadFile onUploadSuccess={successUpload} />
        <DocumentList refresh={refresh} />
      </main>
    </div>
  );
};

export default Home;
