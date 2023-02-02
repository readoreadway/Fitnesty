import React from "react";

import { SlLocationPin } from "react-icons/sl";
import { FaBlenderPhone } from "react-icons/fa";

import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__bg"></div>

      <div className="contact__container container">
        <div className="contact__heading">
          <h2>
            {" "}
            <span>Contact</span> Us
          </h2>
          <small>
            Get in touch with us and let's work it out. We'll always be here to resolve every difficulty you have.
          </small>
        </div>

        <div className="contact__location">
          <div className="contact__address">
            <span className="contact__icon">
              {" "}
              <SlLocationPin />{" "}
            </span>
            <span className="contact__info">
            <small>123, Street Name, Suite 123,</small>
            <small>City Name, State Name.</small>
            </span>
            
          </div>

          <div className="contact__nummail">
            <span className="contact__icon">
              {" "}
              <FaBlenderPhone />{" "}
            </span>
            <span className="contact__info">
              <small> Phone Number: 123-456-7890 </small>
              <small> Email: info@fitnesty.com </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
