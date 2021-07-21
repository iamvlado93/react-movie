import React from 'react';

import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Favourites() {
  return (
    <div className="favourites-page">
      <ProfileHeader />
      <div className="favourites">
        <Link className="previous-page" to={'/profile'}>
          <button type="submit" className="btn btn-secondary btn-ls btn-block">
            Go Back
          </button>
        </Link>
        <h1>Favourites</h1>
      </div>
    </div>
  );
}

export default Favourites;
