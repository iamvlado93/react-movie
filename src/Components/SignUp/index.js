import React, { useState } from 'react';
import { useHistory } from 'react-router';

import axios from 'axios';

import swal from 'sweetalert';

import './index.css';

function SignUp() {
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfPassword, setRegConfPassword] = useState('');

  let history = useHistory();

  const register = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: 'POST',
        data: {
          firstName: regFirstName,
          lastName: regLastName,
          email: regEmail,
          password: regPassword,
          rePassword: regConfPassword,
        },
        withCredentials: true,
        url: 'http://localhost:5000/register',
      }).then((res) => console.log(res));
      swal({
        title: 'Well Done!',
        text: 'You have successfully registered!',
        icon: 'success',
        button: 'Continue',
      }).then(history.push('/signin'));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={register} className="signup-form">
        <h2>Register</h2>
        <div className="form-group">
          <input
            placeholder="First Name"
            className="form-control"
            onChange={(e) => setRegFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Last Name"
            className="form-control"
            onChange={(e) => setRegLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            className="form-control"
            onChange={(e) => setRegEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            className="form-control"
            onChange={(e) => setRegPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Confirm Password"
            className="form-control"
            onChange={(e) => setRegConfPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-ls btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
