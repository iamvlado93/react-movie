import React from 'react';

import { Link } from 'react-router-dom';

import ROUTES from '../../Const/Routes';

import'./index.css';

function Header() {
    return (
      <div className="header">
        <Link className='header-logo' to={ROUTES.HOME}>Belflix</Link>
        <ul className='header-buttons'>
          <Link className='header-button' to={ROUTES.SIGN_UP}>Sign Up</Link>
          <li className='header-button'>Sign In</li>
        </ul>
      </div> 
    );
  }
  
  export default Header;