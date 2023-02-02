import React from "react";
import { Link } from "react-router-dom";

import classes from "./Notfound.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container notfound__container">
        <h2>Oops!!!</h2>
        <p>This page can't be found.</p>
        <div className="home__btn--container">
          <span>Perhaps what we want is</span>
          <Link to="/" className="btn btn__nf">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
