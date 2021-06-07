import React from 'react';

import TeleSection from './TeleSection';
import PhoneSection from './PhoneSection';

import'./index.css';

function Body() {
    return (
      <div className="body">
        <div className='body-container'>
            <h2 className='container-title'>Ready to start?</h2>
            <button type='submit' className='container-signup'>Sign Up</button>
        </div>
        <TeleSection />
        <PhoneSection />
      </div>
    );
  }
  
  export default Body;