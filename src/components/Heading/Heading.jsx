import React from "react";
import "./Heading.css";
const Heading = ({ index, heading }) => {
  return (
    <div className="heading_container">
      <p className="heading_index">{index}.</p>
      <h1 className="heading_heading">{heading}</h1>
      <div className="heading_line"></div>
    </div>
  );
};

export default Heading;
