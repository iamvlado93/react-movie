import axios from 'axios';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Personal() {
  const [userData, setUserData] = useState('');

  const getUserInfo = async () => {
    await axios.get('http://localhost:5000/profile/user').then((res) => {
      setUserData(res.data);
      console.log(res);
    });
  };

  return (
    <div className="personal-page">
      <ProfileHeader />
      <div className="personal">
        <Link className="previous-page" to={'/profile'}>
          <button type="submit" className="btn btn-secondary btn-ls btn-block">
            Go Back
          </button>
        </Link>
        <div className="user-container">
          <button onClick={getUserInfo} type="submit" className="button__user-info">
            Get User Info
          </button>
          {userData ? (
            <div className="user-info">
              <h2>
                <p>Name:</p> {userData.firstName} {userData.lastName}
              </h2>
              <h2>
                <p>Email:</p> {userData.email}
              </h2>
              <h2>
                <p>Password:</p> {userData.rePassword}
              </h2>
              <h2>
                <p>Id:</p> {userData._id}
              </h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Personal;
