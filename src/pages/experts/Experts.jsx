import React from "react";
import Expert from "./Expert";
import Header from "../../components/Header";
import { Trainers } from "../../plans";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import headerImage from "../../images/TrainersHeader.jpg";
import "./experts.css";

const Experts = () => {
  return (
    <>
      <Header title="Our Trainers" image={headerImage}>
        Curabitur lobortis lorem et turpis convallis, malesuada hendrerit neque
        sodales. Integer nulla neque, semper vestibulum imperdiet sed, elementum
        a neque.
      </Header>

      <section className="experts">
        <div className="container experts__container">
          {Trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Expert
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <FaFacebookF />, link: socials[1] },
                  { icon: <FaLinkedinIn />, link: socials[2] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Experts;
