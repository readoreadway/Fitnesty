import SectionHead from "../../components/SectionHead";
import { GiQueenCrown } from "react-icons/gi";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Card from "../../utils/Card";
import { ProgramData } from "../../data";
import { Link } from "react-router-dom";

import './programs.css'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__heading">
          <SectionHead
            icon={<GiQueenCrown />}
            title="Programs"
            className="program__section"
          />
        </div>

        <div className="programs__cards">
          {ProgramData.map(({ id, titleIcon, title, text, path }) => {
            return (
              <Card className="programs__card" key={id}>
                <span className="programs__icon"> {titleIcon} </span>
                <h4> {<BiChevronRight className="chevron"/>} {title} </h4>
                <small> {text} </small>
                <Link to={path} className="btn__sm btn__programs">
                  <span>Learn more</span> <BsArrowRightCircleFill />{" "}
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
