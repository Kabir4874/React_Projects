import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api.js";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import Explore from "./pages/explore/Explore.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
