import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import menu from "../assets/ci_hamburger-lg.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div onClick={handleShow}>
        <img src={menu} alt="" />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <div className="d-flex flex-column container gap-3 mt-3">
            <Link to="/auth/login">
              <button className="login-btn w-100">Log in</button>
            </Link>
            <Link to="/auth/signup">
              <button className="sign-up-btn w-100">Sign Up</button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
