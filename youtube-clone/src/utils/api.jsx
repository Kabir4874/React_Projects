import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const key = "a8cefe0928msh40ab1833a72889cp135ceejsn33ae227243df";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": key || "YOUR_API_KEY",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
