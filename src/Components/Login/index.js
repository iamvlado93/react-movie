import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';
import axios from 'axios';

import HeaderProfile from '../Header';
import { getAuthUserInfo } from '../../Actions/users';

import './index.css';

function SignIn() {
  const [logName, setLogName] = useState('');
  const [logPass, setLogPass] = useState('');
  const [logError, setLogError] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const login = (e) => {
    try {
      e.preventDefault();
      axios({
        method: 'POST',
        data: {
          username: logName,
          password: logPass,
        },
        withCredentials: true,
        url: 'http://localhost:5000/login',
      }).then((res) => {
        if (res.data.isAdmin) {
          history.push('/admin');
          dispatch(getAuthUserInfo(res.data));
        } else {
          history.push('/profile');
          dispatch(getAuthUserInfo(res.data));
        }
      });
    } catch (err) {
      setLogError(true);
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <HeaderProfile />
      <div className="signin">
        <form onSubmit={login} className="signin-form">
          <h2>Login</h2>
          <div className="form-group">
            <input
              placeholder="Email"
              className="form-control"
              onChange={(e) => setLogName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              className="form-control"
              onChange={(e) => setLogPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            Submit
          </button>
          {logError && <p className='login-error'>Incorrect email or password</p>}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
