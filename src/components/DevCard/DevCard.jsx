import "./DevCard.css";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../../../public";

const DevCar = ({ content }) => {
  const { name, role, githubLink, linkedinLink, twitterLink } = content;
  return (
    <div className="dev-wrapper">
      <div className="left">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-container">
          <a href={linkedinLink} target="_blank">
            <img src={LinkedinIcon} />
          </a>
          <a href={githubLink} target="_blank">
            <img src={GithubIcon} />
          </a>
          <a href={twitterLink} target="_blank">
            <img src={TwitterIcon} />
          </a>
        </div>
      </div>
      <hr />
      <div className="right">
        <h4>ALX</h4>
        <p>Student</p>
      </div>
    </div>
  );
};

export default DevCar;
