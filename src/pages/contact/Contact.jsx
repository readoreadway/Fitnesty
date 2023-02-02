import React from "react";
import Header from "../../components/Header";
import contactImage from "../../images/Contact-header.jpg";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={contactImage}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      </Header>

      <section className="contact">
        <div className="contact__section--container">
          <div className="contact__icons">
            <a
              href="https://msng.link/o/?ridoridwe=fm"
              className="contact__icon"
            >
              {" "}
              <FaFacebookMessenger />{" "}
            </a>
            <a
              href="https://wa.me/2348185177293?text=Hello%2C%20Can%20we%20talk%20about%20your%20service%3F"
              className="contact__icon"
            >
              {" "}
              <BsWhatsapp />{" "}
            </a>
            <a href="mailto: fitnesty@dummy.com" className="contact__icon">
              {" "}
              <MdOutlineEmail />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
