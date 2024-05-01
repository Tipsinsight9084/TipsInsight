import React from 'react';
import './loader.css'; // Import the CSS file for styling

const LoadingAnimation = () => {
  return (
    <div className='cricket-loading-container'>
      <div className='cricket-ball'></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
