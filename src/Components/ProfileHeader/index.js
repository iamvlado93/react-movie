import React from 'react';

import { Link } from 'react-router-dom';

import ROUTES from '../../Const/Routes';

import './index.css';

function ProfileHeader() {
  return (
    <div className="profile-header">
      <Link className="profile-header__logo" to={ROUTES.HOME}>
        Belflix
      </Link>
      <ul className="profile-header__buttons">
        <Link className="profile-header__button" to={ROUTES.FAVOURITES}>
          Favourites
        </Link>
        <Link className="profile-header__button" to={ROUTES.USER_INFO}>
          Welcome
        </Link>
        <Link className="profile-header__button" to={ROUTES.LOGOUT}>
          Logout
        </Link>
      </ul>
    </div>
  );
}

export default ProfileHeader;
