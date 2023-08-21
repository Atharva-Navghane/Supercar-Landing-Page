import React from "react";
import { Link } from "react-router-dom";
import './NavbarCSS.css';

function NavbarComp() {
  return (
    <div className="containerClass">
      <h1>Ferrari</h1>
      <div className="different-options">
        <Link to = "/" className="linkreactrouterdom">
        <div className="home text">Home</div>
        </Link>
        <Link to = "/about" className="linkreactrouterdom">
          <div className="about-us text">About Us</div>
        </Link>
        <Link to = "/ContactUs" className="linkreactrouterdom">
        <div className="contact-us text">Contact Us</div>
        </Link>
        <div className="more-options">
          <div className="more-options-text">
            More Options
          </div>
          <select name="More-Options" placeholder="More Options">
            <option value="1">Accessories</option>
            <option value="2">Instagram</option>
            <option value="3">Twitter</option>
            <option value="4">Facebook</option>
          </select> 
        </div>
      </div>
    </div>
  );
}

export default NavbarComp;
