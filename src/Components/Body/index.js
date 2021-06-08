import React from 'react';

import SignUpSection from './SignUpSection';
import TeleSection from './TeleSection';
import PhoneSection from './PhoneSection';
import FAQSection from './FAQSection';

import'./index.css';

function Body() {
    return (
      <div className="body">
        <SignUpSection />
        <TeleSection />
        <PhoneSection />
        <FAQSection />
      </div>
    );
  }
  
  export default Body;