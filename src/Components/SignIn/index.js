import React from 'react';

import { useFormik } from 'formik';

import'./index.css';

function SignIn() {

  const validate = values => {

    const errors = {}

      if(!values.email) {
        errors.email = 'Required'
      }

      if(!values.password) {
        errors.password = 'Required'
      }
      return errors;
  }

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values)
    },
  })

    return (
      <div className="signin">
          <form onSubmit={formik.handleSubmit} className='signin-form'>
            <h2>Belflix</h2>

            <input 
              onChange={formik.handleChange} 
              value={formik.values.email} 
              name='email'
              type='text'
              onBlur={formik.handleBlur}
              placeholder='Email Address'>
            </input>

            {formik.touched.email && formik.errors.email ?
              <p className='signin-error'>{formik.errors.email}</p> : null}

            <input 
              onChange={formik.handleChange} 
              value={formik.values.password} 
              type='password' 
              name='password'
              onBlur={formik.handleBlur}
              placeholder='Password'>
            </input>

            {formik.touched.password && formik.errors.password ?
              <p className='signin-error'>{formik.errors.password}</p> : null}

            <button className='signin-button' type='submit'>Register</button>
          </form>
      </div>
    );
  }
  
  export default SignIn;