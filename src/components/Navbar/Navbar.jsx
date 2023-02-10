import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        {/* <a>SN</a> */}
      </div>

      <div className="nav_right">
        <a href="#About" className="nav_link">
          About
        </a>

        <a href="#Experience" className="nav_link">
          Skills
        </a>

        <a href="#Work" className="nav_link">
          Projects
        </a>

        <a href="#Contact" className="nav_link">
          Contact
        </a>

        <button className="nav_resume_btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
