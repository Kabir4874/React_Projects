import PropTypes from "prop-types";

const Card = ({ review }) => {
  return (
    <div>
      <div>
        <img src={review.image} />
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  review: PropTypes.object,
};
export default Card;
