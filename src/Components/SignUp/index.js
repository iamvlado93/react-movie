import React from 'react';
import { useHistory } from 'react-router';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import swal from 'sweetalert';

import './index.css';

function SignUp() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      regFirstName: '',
      regLastName: '',
      regEmail: '',
      regPassword: '',
      regConfPassword: '',
    },
    validationSchema: Yup.object({
      regFirstName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(10)
        .min(2)
        .required('Required'),
      regLastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(20)
        .min(2)
        .required('Required'),
      regEmail: Yup.string().email('Must be an email! e.g. "user@gmail.com').required('Required'),
      regPassword: Yup.string().min(3, 'Passport must be at least 3 digits').required('Required'),
      regConfPassword: Yup.string()
        .oneOf([Yup.ref('regPassword'), null], 'Password does not match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      try {
        axios({
          method: 'POST',
          data: {
            firstName: values.regFirstName,
            lastName: values.regLastName,
            email: values.regEmail,
            password: values.regPassword,
            rePassword: values.regConfPassword,
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
    },
  });

  let history = useHistory();

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Register</h2>
        <div className="form-group">
          <input
            name="regFirstName"
            id="regFirstName"
            onBlur={handleBlur}
            placeholder="First Name"
            onChange={handleChange}
            value={values.regFirstName}
            className="form-control"
          />
          {touched.regFirstName && errors.regFirstName ? <p>{errors.regFirstName}</p> : null}
        </div>
        <div className="form-group">
          <input
            name="regLastName"
            id="regLastName"
            onBlur={handleBlur}
            placeholder="Last Name"
            onChange={handleChange}
            value={values.regLastName}
            className="form-control"
          />
          {touched.regLastName && errors.regLastName ? <p>{errors.regLastName}</p> : null}
        </div>
        <div className="form-group">
          <input
            name="regEmail"
            id="regEmail"
            onBlur={handleBlur}
            placeholder="Email"
            onChange={handleChange}
            value={values.regEmail}
            className="form-control"
          />
          {touched.regEmail && errors.regEmail ? <p>{errors.regEmail}</p> : null}
        </div>
        <div className="form-group">
          <input
            name="regPassword"
            id="regPassword"
            onBlur={handleBlur}
            placeholder="Password"
            onChange={handleChange}
            value={values.regPassword}
            className="form-control"
          />
          {touched.regPassword && errors.regPassword ? <p>{errors.regPassword}</p> : null}
        </div>
        <div className="form-group">
          <input
            name="regConfPassword"
            id="regConfPassword"
            onBlur={handleBlur}
            placeholder="Confirm Password"
            onChange={handleChange}
            value={values.regConfPassword}
            className="form-control"
          />
          {touched.regConfPassword && errors.regConfPassword ? (
            <p>{errors.regConfPassword}</p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-secondary btn-ls btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
