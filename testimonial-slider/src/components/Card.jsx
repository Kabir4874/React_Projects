import PropTypes from "prop-types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Card = ({ review }) => {
  return (
    <div className=" flex flex-col md:relative">
      <div className=" absolute top-[-7rem] z-10 mx-auto">
        <img
          src={review.image}
          className=" aspect-square rounded-full w-[140px] h-[140px] z-30"
        />
        <div className=" w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px]  -z-20 left-[10px]"></div>
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
