import { FcLike } from "react-icons/fc";
import PropTypes from "prop-types";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter(cid !== course.id));
    }
  }
  return (
    <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className=" relative">
        <img src={course.image.url} />
        <div className=" w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div className=" p-4">
        <p className=" text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className=" mt-2 text-white">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  course: PropTypes.object,
  likedCourses: PropTypes.array,
  setLikedCourses: PropTypes.func,
};
