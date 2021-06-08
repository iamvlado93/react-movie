import React from 'react';

import'./index.css';

function Header() {
    return (
      <div className="header">
        <div className='header-logo'>Belflix</div>
        <ul className='header-buttons'>
            <li className='header-button'>Sign Up</li>
            <li className='header-button'>Sign In</li>
        </ul>
      </div>
    );
  }
  
  export default Header;