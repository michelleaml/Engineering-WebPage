import React from 'react';

const LayoutImage = () => {
  return (
    <section>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center">
        <img 
          src="/Layout2022.png" 
          alt="My Layout Image" 
          className="shadow-lg p-3 mb-5 bg-white rounded" 
          style={{ width: '800px', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default LayoutImage;
