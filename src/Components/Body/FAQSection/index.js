import React from 'react';

import'./index.css';

function FAQSection() {
    return (
    <div className="section-faq">
        <div className="faq-dropdown">
            <li className="dropdown-title">What is Belflix?</li>
            <div className="dropdown-content">
                <li>Belflix is a new worldwide movie application.</li>
            </div>
        </div>
        <div className="faq-dropdown">
            <li className="dropdown-title">What can be seen at Belflix?</li>
            <div className="dropdown-content">
                <li>Movies, series, documentaries, cartoons and trailers. </li>
            </div>
        </div>
        <div className="faq-dropdown">
            <li className="dropdown-title">Is the content suitable for children?</li>
            <div className="dropdown-content">
                <li>Absolutely, our content is suitable for children.</li>
            </div>
        </div>
        <div className="faq-dropdown">
            <li className="dropdown-title">Where to watch?</li>
            <div className="dropdown-content">
                <li>Watch on Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray and etc.</li>
            </div>
        </div>
        <div className="faq-dropdown">
            <li className="dropdown-title">Where to sign up?</li>
            <div className="dropdown-content">
                <li>Just click the button above and follow the instructions</li>
            </div>
        </div>
    </div>
    );
  }
  
  export default FAQSection;