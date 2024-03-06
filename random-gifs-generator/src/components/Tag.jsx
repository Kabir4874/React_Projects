import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = "TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS";

const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {
    fetchData();
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className=" w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3">
      <h1 className=" mt-4 text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className=" w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className=" w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
