import React from "react";
import { Link } from "react-router-dom";

import "./starter.css";

const Starter = () => {
  return (
    <section className="starter__section">
      <div className="container starter__container">
        <div className="starter__content">
          <h2>Take your training to the next level</h2>
          <p>
            Warm up correctly, Use power naps, Practice good nutrition, Take the right supplements...
          </p>
          <Link to="/plans" className="btn__sm">
            Expand your knowledge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Starter;
