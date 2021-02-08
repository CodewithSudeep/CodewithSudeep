import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import Logo from "../../Images/Logo.webp";

const index = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <img src={Logo} alt="CodewithSudeep Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about">ABOUT</Link>
          </li>

          <li>
            <Link to="#">PROJECTS</Link>
          </li>

          <li>
            <Link to="#">COURSES</Link>
          </li>

          <li>
            <Link to="#">RESOURCES</Link>
          </li>

          <li>
            <Link to="#">CAREER</Link>
          </li>

          <li>
            <Link to="#">BLOGS &amp; NEWS</Link>
          </li>

          <li>
            <Link to="#">LOGIN / REGISTER</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
