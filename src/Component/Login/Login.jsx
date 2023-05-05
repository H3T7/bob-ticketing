import React from "react";
import "../Login/Login.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Login() {
  return (
    <>
      <div className="container loginBox">
        <div className="d-flex justify-content-end">
          <AiOutlineCloseCircle className="closeIcon" />
        </div>
        <h2 className="text-center">BoB Event Ticketing</h2>
        <div className="signInBox">
          <h3>Sign In</h3>
          <div className="loginForm">
            <h5>Email</h5>
            <input type="text" name="" id="" />
            <div className="d-flex justify-content-between">
              <h5>Password</h5>
              <h5>Forgot Password?</h5>
            </div>
            <input type="password" name="" id="" />

            <div className="d-flex justify-content-center">
              <button className="signUpBtn">Sign Up</button>
            </div>
              <h5 className="text-center">Don't have account? <b> Sign Up</b></h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
