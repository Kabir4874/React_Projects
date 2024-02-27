import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, SetCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const Data = await res.json();
        SetCourses(Data.data);
      } catch (error) {
        toast.error("Something Went Wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
}

export default App;
