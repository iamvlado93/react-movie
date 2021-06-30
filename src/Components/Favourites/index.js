import React from 'react';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Favourites() {
  return (
    <div className="favourites-page">
      <ProfileHeader />
      <div className="favourites">
        <h1>Favourites</h1>
      </div>
    </div>
  );
}

export default Favourites;
