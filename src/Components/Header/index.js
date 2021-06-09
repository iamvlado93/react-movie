import React from 'react';

import { Link } from 'react-router-dom'

import'./index.css';

function Header() {
    return (
      <div className="header">
        <Link className='header-logo' to='/'>Belflix</Link>
        <ul className='header-buttons'>
          <Link className='header-button' to='/signup'>Sign Up</Link>
          <li className='header-button'>Sign In</li>
        </ul>
      </div> 
    );
  }
  
  export default Header;