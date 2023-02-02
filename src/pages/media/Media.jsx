import React from "react";
import Header from "../../components/Header";
import headerImage from "../../images/Dumbell.jpg";

import classes from "./Media.css";

const Media = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/Gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={headerImage}>
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot
      </Header>
      <section className="gallery">
        <div className="gallery__container container">
          {images.map((image, index) => {
            return <article key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
            </article>
          })}
        </div>
      </section>
    </>
  );
};

export default Media;
