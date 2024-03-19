import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ReactStars from "react-stars";
import { moviesRes } from "../firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const data = await getDocs(moviesRes);
      data.forEach((doc)=>{
        setData((prev)=>[...prev, doc.data()])
      })
    }
    getData();
    setLoading(false);
  }, []);
  return (
    <div className=" flex flex-wrap gap-4 p-3 mt-2">
      {loading ? (
        <div className=" w-full flex items-center justify-center h-96">
          <TailSpin height={40} color="white" />
        </div>
      ) : (
        data.map((element, index) => {
          return (
            <div
              key={index}
              className=" bg-gray-900 shadow-lg p-2 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md font-medium mt-6"
            >
              <img src={element.image} className=" h-80 rounded-md" />
              <h1>
                <span className=" text-gray-500">Name:</span> {element.title}
              </h1>
              <h1 className=" flex items-center">
                <span className=" text-gray-500 mr-1">Rating:</span>
                <ReactStars size={20} half={true} value={5} edit={false} />
              </h1>
              <h1>
                <span className=" text-gray-500">Year:</span> {element.year}
              </h1>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cards;
