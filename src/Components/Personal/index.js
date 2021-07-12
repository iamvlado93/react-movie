import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Personal() {

  const userInfo = useSelector((state) => state.userAuthReducer.users);
  const { loading, error } = userInfo;

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
        {loading ? (
            <div className="loading">
              <div></div>
              <div></div>
            </div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="user-info">
                <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                <h2>{userInfo.email}</h2>
                <h2>{userInfo.rePassword}</h2>
                <h2>{userInfo._id}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Personal;
