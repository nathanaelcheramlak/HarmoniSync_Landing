import "./FeatureCard.css";

const FeatureCard = ({ content }) => {
  const { title, description, image, isCenter } = content;

  return (
    <div className={`feature-wrapper ${isCenter ? "center" : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {image && <img src={image} alt={`${title} Image`} />}
    </div>
  );
};

export default FeatureCard;
