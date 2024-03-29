import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className=" w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3">
      <h1 className=" mt-4 text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className=" w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData()}
        className=" w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;