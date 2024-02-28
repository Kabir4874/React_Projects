import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ courses, category }) => {
  let allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      }); 
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  courses: PropTypes.object,
};
