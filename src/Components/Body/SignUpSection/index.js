import React from 'react';

import { Link } from 'react-router-dom';

import ROUTES from '../../../Const/Routes';

import'./index.css';

function SignUpSection() {
    return (
        <div className='body-container'>
            <h2 className='container-title'>Ready to start?</h2>
            <Link to={ROUTES.SIGN_UP}>
                <button type='submit' className='container-signup'>Sign Up</button>
            </Link>
        </div>
    );
  }
  
  export default SignUpSection;