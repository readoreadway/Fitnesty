import React from "react";
import MainHeader from "../../components/MainHeader";
import Programs from "./Programs";
import Starter from "./Starter";
import Testimonials from "./testimonials";
import Amenities from "./Amenities";
import Faq from "./Faq";
import Contact from "./Contact";

import "./Home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Starter />
      <Testimonials />
      <Amenities />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
