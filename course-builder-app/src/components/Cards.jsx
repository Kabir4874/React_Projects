import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} course={course} />;
        })
      )}
    </div>
  );
};

export default Cards;
