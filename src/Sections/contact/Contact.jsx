import React from "react";
import Heading from "../../components/Heading/Heading";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="Contact">
      <Heading index="04" heading="Contact Me" />
      <section className="contact_section">
        <div className="contact_heading_1"></div>
        <h1 className="contact_heading_2">Get in touch</h1>
        <p className="contact_desc">
          <p>Mobile no: 6306677567</p>
          <p>Email : shivamsahu63066@gmail.com</p>
          <p>Adress: Haripur, Amethi, Uttarpradesh, India</p>
           {" "}
        </p>
        <a href="mailto:shivamsahu63066@gmail.com">
          <button className="contact_btn">say Hello</button>
        </a>
      </section>
    </section>
  );
};

export default Contact;
