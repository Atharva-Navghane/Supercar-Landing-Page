import React from "react";
import './NavbarCSS.css';

function NavbarComp() {
  return (
    <div className="containerClass">
      <h1>Ferrari</h1>
      <div className="different-options">
        <div className="home text">Home</div>
        <div className="about-us text">About Us</div>
        <div className="contact-us text">Contact Us</div>
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
