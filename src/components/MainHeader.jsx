import React from "react";
import { Link } from "react-router-dom";
import Plans from "../pages/plans/Plans";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container mainheader__container">
        <div className="mainheader__container--content">
          <h4>#30DaysWorkoutChallenge</h4>
          <h1>Discover the magic of Fitnesty</h1>
          <p>
            Magic is personal training. Real human trainers
            guiding, correcting and pushing you to be your best.
          </p>
          <Link to="/plans" className="btn mainheader__btn">
            Join Our Legends
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
