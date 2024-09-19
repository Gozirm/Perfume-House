import React, { useEffect } from "react";
import googleIcon from "/src/assets/🦆 icon _google_.svg";
import arrow from "/src/assets/Line 13.svg";
import arrowRight from "/src/assets/Line 16.svg";
import logo from "/src/assets/Group 9283.svg";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInSchema } from "../lib/ValidationSchema";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = "Login";
  });
  return (
    <>
      <main className="sign-in-container  justify-content-center d-flex align-items-center ">
        <div className="main-form py-3 px-3 my-5">
          <div className="d-lg-flex d-none form-h2">
            <Link className="d-flex gap-2 text-decoration-none" to="/">
              <img src={logo} alt="" />
              <h2 className="logo-name">Perfume House</h2>
            </Link>
          </div>
          <div className="form-bg p-md-5 my-md-5 mx-3 container">
            <div className="d-flex gap-1 row">
              <h3 className="form-h3">Wellcome Back</h3>
              <p className="form-p">
                Fill in your information to access your account.
              </p>
            </div>
            <form
              className="d-flex row  align-items-center justify-content-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex row mt-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input-details"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="d-flex row my-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-details"
                  {...register("password")}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 align-items-center w-50">
                  <input type="checkbox" className="mb-3" />
                  <p className="p-checkbox">Remember Me</p>
                </div>
                <p>Forgot Password</p>
              </div>
              <button className="btn-form sign">Sign In</button>
              <div className="d-flex algin-items-center justify-content-center gap-2">
                <img src={arrow} alt="" />
                <p className="mt-3">or</p>
                <img src={arrowRight} alt="" />
              </div>
              <button className="btn-form google">
                <img src={googleIcon} alt="googleicon" className="me-2 mb-1" />
                Continue with Google
              </button>
            </form>
            <div>
              <p className="last-form-p">
                Don’t have an account?{" "}
                <Link className="text-decoration-none" to="/auth/login">
                  <b>Sign Up</b>
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

export default SignUp;
