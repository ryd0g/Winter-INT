import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

function Signup() {
  return (
    <div className='signup'>
      <div class='d-flex justify-content-center'>
        <form class='form-inline'>
          <p>Please Enter Your Information</p>
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='First Name'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Last Name'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Address'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Suite/Apt. Number'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='City'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='State'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Zip'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Email'
          />
          <input
            type='text'
            class='form-control mb-2 mr-sm-2'
            placeholder='Password'
          />
          <button class='btn btn-dark mb-2' id='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
