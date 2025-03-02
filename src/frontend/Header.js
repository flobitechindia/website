import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo"></div> {/* No img tag, just a div */}
        <h1 className="company-name">Flobi Tech India</h1>
      </div>
      <nav className="nav-links">
      <button><a href="#our services">Our Services</a></button>
        <button><Link to ="/solutions">Solutions</Link></button>
        <button><a href="#resources">Resources</a></button>
        <button><a href="#careers">Careers</a></button>
        <button><a href="#about">About Us</a></button>
        <button><a href="#contact">Contact Us</a></button>
      </nav>
    </header>
  );
};

export default Header;
