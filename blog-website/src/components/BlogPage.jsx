import { useEffect } from "react";
import { useState } from "react";
import BlogCards from "./BlogCards";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const [currentPage,setCurrentPage]= useState(1)

  const pageSize= 12;

  const [selectedCategory, setSelectedCategory]= useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      const url = `http://localhost:5000/blogs`;
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  return (
    <div>
      {/* Category Section  */}
      <div>Page Category</div>

      {/* BlogCards Section  */}
      <div>
        <BlogCards blogs={blogs}/>
      </div>

      {/* Pagination Section */}
      <div>Pagination</div>
    </div>
  );
};

export default BlogPage;
