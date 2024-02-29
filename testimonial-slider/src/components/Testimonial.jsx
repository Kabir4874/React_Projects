import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />

      <div className=" flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button onClick={leftShiftHandler} className=" hover:text-violet-500">
          <IoIosArrowBack />
        </button>
        <button onClick={rightShiftHandler} className=" hover:text-violet-500">
          <IoIosArrowForward />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surpriseHandler}
          className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg "
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};
Testimonial.propTypes = {
  reviews: PropTypes.array,
};

export default Testimonial;
