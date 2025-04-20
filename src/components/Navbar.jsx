import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Airbnb" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Places</a></li>
        <li><a href="#">Experiences</a></li>
        <li><a href="#">Online Experiences</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
