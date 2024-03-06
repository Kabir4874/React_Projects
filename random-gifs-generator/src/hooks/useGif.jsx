import { useEffect, useState } from "react";
import axios from "axios";
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "TSMkTCNl9Cv1ytCCaRKQ3OSaL72sKxnS";
  const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(tag ? TagUrl : RandomUrl);
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
  return { gif, loading, fetchData };
};

export default useGif;
