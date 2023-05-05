import React from "react";
import "../Register/Register.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Register() {
  return (
    <>
      <div className="container loginBox">
        <div className="d-flex justify-content-end">
          <AiOutlineCloseCircle className="closeIcon" />
        </div>
        <h2 className="text-center">BoB Event Ticketing</h2>
        <div className="signUpBox">
          <h3>Sign Up</h3>
          <div className="loginForm">
            <div className="row">
              <div className="col-md-6">
                <h5>First Name</h5>
                <input type="text" />
                <h5>Email</h5>
                <input type="email" />
                <h5>Password</h5>
                <input type="password" />
              </div>
              <div className="col-md-6">
                <h5>Last Name</h5>
                <input type="text" />
                <h5>Mobile No.</h5>
                <input type="text" />
                <h5>Confirm Password</h5>
                <input type="password" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="signUpBtn">Sign In</button>
            </div>
              <h5 className="text-center">Already have an account? <b> Sign In</b></h5>
          </div>

        </div>
      </div>
    </>
  );
}

export default Register;
