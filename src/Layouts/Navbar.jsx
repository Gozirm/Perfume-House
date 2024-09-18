import React from "react";
import logo from "../assets/Group 9283.svg";
import OffCanvas from "../lib/OffCanvas";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="container d-flex justify-content-between align-items-center py-4">
        <div className="d-flex gap-2">
          <img src={logo} alt="logo" />
          <h2 className="pt-1 d-none d-md-block">Perfume House</h2>
        </div>
        <div className="d-md-flex d-none gap-4">
          <Link to="/auth/login">
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="/auth/signup">
            <button className="sign-up-btn">Sign Up</button>
          </Link>
        </div>
        <div className="d-md-none">
          {["top"].map((placement, idx) => (
            <OffCanvas key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
