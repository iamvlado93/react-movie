import React, { useState } from 'react';

import { useHistory } from 'react-router';

import axios from 'axios';

import './index.css';

function SignIn() {
  const [logName, setLogName] = useState('');
  const [logPass, setLogPass] = useState('');

  let history = useHistory();

  const login = () => {
    axios({
      method: 'POST',
      data: {
        username: logName,
        password: logPass,
      },
      withCredentials: true,
      url: 'http://localhost:5000/login',
    })
      .then((res) => console.log(res))
      .then(history.push('/profile'));
  };

  return (
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
      </form>
    </div>
  );
}

export default SignIn;
