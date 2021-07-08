import React from 'react';

import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Personal() {
  return (
    <div className="personal-page">
      <ProfileHeader />
      <div className="personal">
        <Link className="previous-page" to={'/profile'}>
          <button type="submit" className="btn btn-secondary btn-ls btn-block">
            Go Back
          </button>
        </Link>
        <h1>Personal</h1>
      </div>
    </div>
  );
}

export default Personal;
