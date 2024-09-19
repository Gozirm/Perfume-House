import React, { useEffect } from "react";
import googleIcon from "/src/assets/🦆 icon _google_.svg";
import arrow from "/src/assets/Line 13.svg";
import arrowRight from "/src/assets/Line 16.svg";
import logo from "/src/assets/Group 9283.svg";
import { Link, Outlet } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    document.title = "SignUp";
  });
  return (
    <>
      <main className="sign-in-container  justify-content-center d-flex gap-4 align-items-center ">
        <div className="main-form p-5">
          <div className="d-lg-flex d-none form-h2">
            <Link className="text-decoration-none d-flex gap-2" to="/">
              <img src={logo} alt="" />
              <h2 className="logo-name">Perfume House</h2>
            </Link>
          </div>
          <div className="form-bg p-md-5 my-md-5 container">
            <div className="d-flex gap-1 row">
              <h3 className="form-h3">Get Started</h3>
              <p className="form-p">
                Lets get started by filling out the information below
              </p>
            </div>
            <form className="d-flex row  align-items-center justify-content-center">
              <div className="d-flex gap-5">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input-names"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input-names"
                  />
                </div>
              </div>
              <div className="d-flex row mt-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input-details"
                />
              </div>
              <div className="d-flex row my-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-details"
                />
              </div>
              <div className="d-flex row mt   -3">
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input-details"
                />
              </div>
              <div className="d-flex gap-3">
                <input type="checkbox" className="checkbox" />
                <p className="mt-3 p-checkbox">
                  I agree to <b>Terms of Service</b> and <b>Privacy Policies</b>
                </p>
              </div>
            </form>
            <div>
              <Link className="text-decoration-none" to="/">
                <button className="btn-form sign">Sign Up</button>
              </Link>
              <div className="d-flex algin-items-center justify-content-center gap-2">
                <img src={arrow} alt="" />
                <p className="mt-3">or</p>
                <img src={arrowRight} alt="" />
              </div>
              <button className="btn-form google">
                <img src={googleIcon} alt="googleicon" className="me-2 mb-1" />
                Continue with Google
              </button>
              <p className="last-form-p">
                Already have an account?{" "}
                <Link className="text-decoration-none" to="/auth/signUp">
                  <b>Sign in</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Login;
