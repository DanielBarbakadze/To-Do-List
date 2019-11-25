import React from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
    return (

      <div className="login-page">

          <div className="form">

            <div className="form-text">
            <label>Registration</label>
            </div>
            
            <form className="login-form">

              <input type="text" name="username" placeholder="Enter Username"/>
              <input type="text" name="firstname" placeholder="Enter Name"/>
              <input type="text" name="surname" placeholder="Enter Surname"/>
              <input className="date" type="date" name="date" placeholder="Your Birth Date"/>
              <input type="email" name="email" placeholder="Enter Email"/>
              <input type="password" name="password" placeholder="Enter Password"/>
              <input type="password"  name="confirm" placeholder="Confirm Password"/>

              <button>Register</button>
              <p className="message">Registered? <Link to="/">
                Login Jigaro!</Link></p>

            </form>
          </div>
        </div>

      )
  }