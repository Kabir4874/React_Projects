import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className=" w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 my-20">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className=" w-full h-full flex items-center justify-center">
          <p className=" text-3xl">No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
