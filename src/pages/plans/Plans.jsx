import React from "react";
import Header from "../../components/Header";
import Card from "../../utils/Card";
import HeaderImage from "../../images/tread-mills.jpg";
import { plans } from "../../plans";

import "./plans.css"

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui
      </Header>

      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, title, desc, price, features }) => {
            return <Card key={id} className="plan">
              <h3> {title} </h3>
              <small> {desc} </small>
              <div className="plan__price"><h1> {`$${price}`} </h1>  <h2>/mo</h2></div>
              <h4>Features</h4>
              {
                features.map(({feature, Available}, index) => {
                  return <p key={index} className={!Available ? "disabled" : ""}>
                    { feature }
                  </p>
                })
              }

              <button className="btn btn__plan">Choose Plan</button>
            </Card>;
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
