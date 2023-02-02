import React from "react";
import { Component } from "react";
import { testimonialsData } from "../../data";
import { ImQuotesLeft } from "react-icons/im";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import "./testimonial.css";
import Card from "../../utils/Card";
import SectionHead from "../../components/SectionHead";

const Testimonials = () => {
  return (
    <section className="section__testimonials">
      <SectionHead title="Members Journey" icon={<ImQuotesLeft />} className="testimonial__heading" />

      <div className="container testimonials__container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="testimonial__cards"
        >
          {testimonialsData.map((testimonial) => {
            return (
              <SwiperSlide className="testimonial__card" key={testimonial.id}>
                <div className="testimonial__image">
                  <img src={testimonial.imageSource} alt={testimonial.name} />
                </div>
                <div className="testimonial__content">
                  <small> {testimonial.text} </small>
                  <h5 className="testimonial__name">{testimonial.name}</h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
