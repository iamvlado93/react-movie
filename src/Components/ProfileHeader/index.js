import axios from 'axios';
import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import ROUTES from '../../Const/Routes';

import './index.css';

function ProfileHeader() {
  const history = useHistory();

  const userLogOut = async (e) => {
    try {
      await axios.get('/logout').then((res) => {
        history.push('/');
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-header">
      <Link className="profile-header__logo" to={ROUTES.HOME}>
        Belflix
      </Link>
      <ul className="profile-header__buttons">
        <Link className="profile-header__button" to={ROUTES.FAVOURITES}>
          Favourites
        </Link>
        <Link className="profile-header__button" to={ROUTES.PERSONAL_DETAILS}>
          Welcome
        </Link>
        <Link onClick={userLogOut} className="profile-header__button" to={ROUTES.LOGOUT}>
          Logout
        </Link>
      </ul>
    </div>
  );
}

export default ProfileHeader;
