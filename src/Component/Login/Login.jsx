import React from "react";
import "../Login/Login.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  return (
    <>
      <div className="container">
        <h2 className="text-center logintitletext">BoB Event Ticketing</h2>
        <div className="signInBox">
          <h3 className="mt-4">Sign In</h3>
          <div className="loginForm">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Enter Email"
                  multiline
                />
              </div>
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Password"
                  placeholder="Enter Password"
                  multiline
                />
              </div>
            </Box>
            <p className="text-end">Forgot Password?</p>
            <div className="d-flex justify-content-center">
              <button className="signUpBtn mt-3">Sign Up</button>
            </div>
            <p className="text-center mt-2">
              Don't have account? <b className="logintitletext"> Sign Up</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
