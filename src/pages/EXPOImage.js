import React from 'react';

const CenteredImage = () => {
  return (
    // <div className="d-flex justify-content-center align-items-center vh-100">
    //   <img
    //     src="src/assets/images/expoIng.png"
    //     alt="Imagen centrada"
    //     className="img-fluid"
    //   />
    // </div>
    <section>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <img
        src = "../expoIng.png" 
        className="shadow-lg p-3 mb-5 bg-white rounded"
        alt="Imagen EXPO Ing"
      />
    </div>
  </section>

  );
};

export default CenteredImage;

