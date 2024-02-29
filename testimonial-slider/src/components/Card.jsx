import PropTypes from "prop-types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

      <div>
        <FaQuoteLeft />
      </div>

      <div>{review.text}</div>

      <div>
        <FaQuoteRight />
      </div>

      <div>
        <button>
          <IoIosArrowBack />
        </button>
        <button>
          <IoIosArrowForward />
        </button>
      </div>

      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  review: PropTypes.object,
};
export default Card;
