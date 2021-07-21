import React from 'react';

import tv from '../../../Images/tv.png';

import './index.css';

function TeleSection() {
  return (
    <div className="section-tv">
      <div className="tv-container">
        <div className="container-left">
          <img src={tv} alt="tv"></img>
        </div>
        <div className="container-right">
          <p>Watch on Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray and etc.</p>
        </div>
      </div>
    </div>
  );
}

export default TeleSection;
