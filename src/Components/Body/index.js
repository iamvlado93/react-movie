import React from 'react';

import Header from '../Header';
import SignUpSection from './SignUpSection';
import TeleSection from './TeleSection';
import PhoneSection from './PhoneSection';
import FAQSection from './FAQSection';

import './index.css';

function Body() {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <SignUpSection />
        <TeleSection />
        <PhoneSection />
        <FAQSection />
      </div>
    </div>
  );
}

export default Body;
