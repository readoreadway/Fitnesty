import React from "react";
import { amenitiesData, amenitiesData2 } from "../../data";

import "./amenities.css";

const Amenities = () => {
  return (
    <section className="amenities">
      {/* <div className="contact__bg"></div> */}

      <h2>
        Gym <span>Amenities</span>
      </h2>

      <div className="container amenities__container">
        <small>
          Generally speaking, people are drawn to clean facilities where they
          are welcomed and given what they pay for as members
        </small>
        <div className="amenties__contents">
          <article className="amenities__content">
            {amenitiesData.map(({ id, info, icon }) => {
              return (
                <p key={id} className="amenities__item">
                  <span className="amenity__icon"> {icon} </span>
                  <span className="info"> {info} </span>
                </p>
              );
            })}
          </article>

          <article className="amenities__content">
            {amenitiesData2.map(({ id, info, icon }) => {
              return (
                <p key={id} className="amenities__item">
                  <span className="amenity__icon"> {icon} </span>
                  <span className="info"> {info} </span>
                </p>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
