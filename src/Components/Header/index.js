import React from 'react';

import { Link } from 'react-router-dom';

import ROUTES from '../../Const/Routes';

import './index.css';

function Header() {
  return (
    <div className="header">
      <Link className="header-logo" to={ROUTES.HOME}>
        Belflix
      </Link>
      <ul className="header-buttons">
        <Link className="header-button" to={ROUTES.REGISTER}>
          Sign Up
        </Link>
        <Link className="header-button" to={ROUTES.LOGIN}>
          Sign In
        </Link>
      </ul>
    </div>
  );
}

export default Header;
