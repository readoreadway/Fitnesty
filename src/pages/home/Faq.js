import React from "react";
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import SectionHead from "../../components/SectionHead";
import { faqData } from "../../data";

import "./faq.css";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggleHandler = id => {
    if(clicked === id) {
        return setClicked(true)
    }

    setClicked(id)
  }
  return (
    <section className="faq">
      <SectionHead title="FAQ" icon={<FaQuestion />} className="faq" />
      <div className="container faq__container">
        {faqData.map(({ id, question, answer, source }) => {
          return (
            <article key={id} className="question__container">
              <div className="question" onClick={() => toggleHandler(id)} key={id}>
                <h4> {question} </h4>
                <button>
                  {clicked ===id ? (
                    <FiMinusCircle className="question__icon" />
                  ) : (
                    <FiPlusCircle className="question__icon" />
                  )}
                </button>
              </div>
              { clicked === id && <div className="answer__container"> <p> {answer}</p> <small className="faq__source"> {source} </small> </div> }
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
