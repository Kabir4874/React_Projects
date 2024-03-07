import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
 const [searchParams, setSearchParams]=  useSearchParams();
 const location= useLocation();
  useEffect(() => {
    const page= 
  }, []);
  return (
    <div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CtegoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
