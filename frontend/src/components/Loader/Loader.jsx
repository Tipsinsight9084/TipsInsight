import React from 'react';
import './loader.css'; // Import the CSS file for styling

const LoadingAnimation = () => {
  return (
    // <> 
      <div className='cricket-loading-container'>
      <div className='cricket-ball'></div>
      <p className='text'>Loading...<br/>
      Please Wait
      <br/>
      It might take some time to load matches
      </p>
    </div> 
    // </>

  );
};

export default LoadingAnimation;
