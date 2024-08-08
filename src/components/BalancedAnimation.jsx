import React from 'react';
import "../components/styles/BalancedAnimation.css"; // Make sure this path is correct

const BalancedAnimation = () => {
  return (
    <div className="balanced-container">
      <img
        className='balanced-image pulse' // Added the pulse class here
        id="image"
        src="https://cdn.pixabay.com/photo/2016/11/22/23/29/meditate-1851165_1280.jpg"
        alt="Balanced"
      />
    </div>
  );
};

export default BalancedAnimation;