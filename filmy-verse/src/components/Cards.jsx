import { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Star Wars",
      year: "2019",
      rating: 5,
      img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg",
    },
  ]);
  return (
    <div className=" flex flex-wrap justify-between p-3 mt-2">
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className=" bg-gray-900 shadow-lg p-2 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md font-medium mt-6"
          >
            <img src={element.img} className=" h-80 rounded-md" />
            <h1>
              <span className=" text-gray-500">Name:</span> {element.name}
            </h1>
            <h1 className=" flex items-center">
              <span className=" text-gray-500 mr-1">Rating:</span>
              <ReactStars
                size={20}
                half={true}
                value={element.rating}
                edit={false}
              />
            </h1>
            <h1>
              <span className=" text-gray-500">Year:</span> {element.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
