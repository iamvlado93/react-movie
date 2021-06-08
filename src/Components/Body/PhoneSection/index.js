import React from 'react';

import phone from '../../Images/phone.png';

import'./index.css';

function PhoneSection() {
    return (
      <div className="section-phone">
          <div className='phone-container'>
              <div className='container-left'>
                <p>Download TV shows for offline viewing and save videos as favorites</p>  
              </div>
              <div className='container-right'>
                <img src={phone} alt='tv'></img>
              </div>
          </div>
      </div>
    );
  }
  
  export default PhoneSection;