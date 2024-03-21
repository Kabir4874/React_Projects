const CategorySelection = ({
  onSelectCategory,
  selectedCategory,
  activeCategory,
}) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="space-x-16 px-4 my-8 flex flex-wrap items-center border-b-2 text-gray-900 py-5 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={`mr-2 ${activeCategory === null ? "active-button" : ""}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`mr-2 ${
            activeCategory === category ? "active-button" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
