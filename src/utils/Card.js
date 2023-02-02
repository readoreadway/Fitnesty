import React from "react";

import "./card.css";

const Card = (props) => {
  return (
    <article className={`card ${props.className}`}>{props.children}</article>
  );
};

export default Card;
