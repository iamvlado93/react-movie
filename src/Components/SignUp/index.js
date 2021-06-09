import React from 'react';

import swal from 'sweetalert';
import { useFormik } from 'formik';

import'./index.css';

function SignUp() {

  const validate = values => {

    const errors = {}

      if(!values.firstName) {
        errors.firstName = 'Required'
      }

      if(!values.lastName) {
        errors.lastName = 'Required'
      }

      if(!values.email) {
        errors.email = 'Required'
      } else if (values.email.length < 4) {
        errors.email = 'Must be 4 characters or more'
      }

      if(!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 6) {
        errors.password = 'Password must be 6 digits or more'
      }

      if(!values.rePassword) {
        errors.rePassword = 'Required'
      } else if (values.rePassword !== values.password) {
        errors.rePassword = 'Password does not match'
      }
      return errors;
  }

  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
      swal({
        title: "Well Done!",
        text: "You have successfully registered!",
        icon: "success",
        button: "Continue",
      })
    },
  })

    return (
      <div className="signup">
          <form onSubmit={formik.handleSubmit} className='signup-form'>
            <h2>Belflix</h2>
            <input 
              onChange={formik.handleChange} 
              value={formik.values.firstName} 
              name='firstName'
              type='text'
              onBlur={formik.handleBlur}
              placeholder='First Name'>
            </input>

            {formik.touched.firstName && formik.errors.firstName ?
              <p className='signup-error'>{formik.errors.firstName}</p> : null}

            <input 
              onChange={formik.handleChange} 
              value={formik.values.lastName} 
              name='lastName'
              type='text'
              onBlur={formik.handleBlur}
              placeholder='Last Name'>
            </input>

            {formik.touched.lastName && formik.errors.lastName ?
              <p className='signup-error'>{formik.errors.lastName}</p> : null}

            <input 
              onChange={formik.handleChange} 
              value={formik.values.email} 
              name='email'
              type='text'
              onBlur={formik.handleBlur}
              placeholder='Email Address'>
            </input>

            {formik.touched.email && formik.errors.email ?
              <p className='signup-error'>{formik.errors.email}</p> : null}

            <input 
              onChange={formik.handleChange} 
              value={formik.values.password} 
              type='password' 
              name='password'
              onBlur={formik.handleBlur}
              placeholder='Password'>
            </input>

            {formik.touched.password && formik.errors.password ?
              <p className='signup-error'>{formik.errors.password}</p> : null}
              
            <input
              onChange={formik.handleChange} 
              value={formik.values.rePassword} 
              type='password' 
              name='rePassword'
              onBlur={formik.handleBlur}
              placeholder='Confirm Password'>
            </input>
            
            {formik.touched.rePassword && formik.errors.rePassword ?
              <p className='signup-error'>{formik.errors.rePassword}</p> : null}

            <button className='signup-button' type='submit'>Register</button>
          </form>
      </div>
    );
  }
  
  export default SignUp;