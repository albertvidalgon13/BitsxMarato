// MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="image-container">
        <img src="/usr/src/frontend/src/components/melon.jpg" alt="Foto no se ve" />
      </div>
      <div className="text-container">
        <h1>Título del Texto</h1>
        <p>Aquí va tu texto principal. Puedes agregar más párrafos si es necesario.</p>
      </div>
    </div>
  );
};
export default MainContent;
