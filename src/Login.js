import React from 'react';
import './Login.css';
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login">
        {/* spotify logo */}
        <img src="logo.png" width="150" height="84" alt=""/>
  
        {/* login page with spotify button */}
        <a href={loginUrl}>Login with Spotify</a>
  
      </div>
    )
}

export default Login
