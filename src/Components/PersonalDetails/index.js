import React from 'react';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function PersonalDetails() {
  return (
    <div className="personal-page">
      <ProfileHeader />
      <div className="personal-details">
        <h1>Personal details</h1>
      </div>
    </div>
  );
}

export default PersonalDetails;
