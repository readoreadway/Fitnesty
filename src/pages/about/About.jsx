import React from "react";
import Header from "../../components/Header";
import headerImage from "../../images/manCaring-weight.jpg";
import storyImage from "../../images/tread-mills.jpg";
import visionImage from "../../images/vision-image.jpg";
import missionImage from "../../images/mision.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <Header
        title="About Us"
        image={headerImage}
        source="gymandfitness.com.au"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse
        debitis excepturi recusandae. Quo voluptatem ea, magnam odit quis vitae
        in dignissimos Tenetur esse debitis excepturi recusandae.
      </Header>

      {/* STORY SECTION */}
      <section className="story">
        <div className="about__container story__container">
          <div className="about__image">
            <img src={storyImage} alt="Our Story Image" />
          </div>

          <div className="about__content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              odit blanditiis voluptatem dolorum corrupti deserunt aperiam
              cumque reprehenderit modi qui!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quibusdam rerum aut quaerat culpa labore vel praesentium ad
              assumenda repellat! Dolore facere libero quod laborum iure natus
              blanditiis totam sequi, nemo quo consectetur facilis delectus
              nostrum sit labore illo adipisci pariatur amet, perspiciatis
              impedit ullam?
            </p>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="story vision">
        <div className="about__container vision__container">
          <div className="about__content">
            <h2>Our Vision</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil
            </p>
          </div>

          <div className="about__image">
            <img src={visionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="story mission">
        <div className="about__container mission__container">
          <div className="about__image">
            <img src={missionImage} alt="Our mission Image" />
          </div>

          <div className="about__content">
            <h2>Our Mission</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
