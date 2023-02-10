import React from "react";
import "./ContactBar.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        <a
           href="https://www.linkedin.com/in/shivam-sahu-303303216/"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <LinkedInIcon />
        </a>
        <a
          // href="#random"
          href="https://github.com/ShivamSahu2001"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/shivam_sahu5225/"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/Shivam_Sahu5225"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <div className="contact_bar_line"></div>
      </div>
      <div className="contact_bar">
        <a href="mailto:shivamsahu63066@gmail.com" className="contact_bar_email">
          shivamsahu63066@gmail.com
        </a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};

export default ContactBar;
