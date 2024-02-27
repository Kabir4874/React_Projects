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
    <div>
        Helkj 
    </div>
  );
};

export default Cards;
