import Card from "../../utils/Card";

const Expert = ({ name, image, job, socials }) => {
  return (
    <Card className="expert">
      <div className="expert__image">
        {" "}
        <img src={image} alt={name} />{" "}
      </div>
      <h3> {name} </h3>
      <p> {job} </p>
      <div className="trainer__socials">
        {
        socials.map(({icon, link}, index) => {
            return <a href={link} key={index} target="_blank" rel="noreffer noopener"> {icon} </a>
        })
        }
        </div>
    </Card>
  );
};

export default Expert;
