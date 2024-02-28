import PropTypes from "prop-types";
const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className=" w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2  transition-all duration-300 ${
              category === data.title
                ? "border-white bg-opacity-60"
                : "border-opacity-40 border-transparent"
            }`}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  filterData: PropTypes.array,
  category: PropTypes.string,
  setCategory: PropTypes.func,
};
