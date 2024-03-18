const Cards = () => {
  return (
    <div className=" flex flex-wrap justify-between p-3 mt-2">
      <div className=" bg-gray-900 shadow-lg p-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-md">
        <img
          src="https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg"
          className=" h-80 rounded-md"
        />
        <h1>Name: Star Wars</h1>
        <h1>Rating: 5</h1>
        <h1>Year: 2019</h1>
      </div>
    </div>
  );
};

export default Cards;
