import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

function App() {
  const [courses, SetCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const Data = await res.json();
        SetCourses(Data.data);
      } catch (error) {
        toast.error("Something Went Wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
