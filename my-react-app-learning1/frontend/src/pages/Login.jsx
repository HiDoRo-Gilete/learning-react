import React from 'react';
import Pg_Home from'../assets/home_bg.png'
import Header from '../ults/Header';
import { Outlet, Link } from "react-router-dom";
import '../css/Login.css'

function Login() {
  return (
    <>

        <div className="container">
          <Header/>
          <div className="body">
            <h2 className="label_signin">Sign in</h2>
            <input type="text" className="input " placeholder='username' />
            <input type="password" className="input" placeholder='password' />
            <div className="remember">
              <input type="checkbox" className="remember__cb" />
              <span className="remember__lb">Remember password</span>
            </div>
            <button className="btn__login">Login</button>
            <div className="underline"></div>
            <div className="signup">
            <span className="signup__label">You don't have account! Registed </span>
              <Link to="/sign_up " className='signup__label signup__lable__link' >
              now
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Login;