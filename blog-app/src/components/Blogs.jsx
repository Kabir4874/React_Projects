import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

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
        posts.map((post) => (
          <div key={post.id}>
            <p className=" font-bold">{post.title}</p>
            <p className="text-[12px]">
              By <span className=" italic">{post.author}</span> on{" "}
              <span className=" underline font-bold">{post.category}</span>
            </p>
            <p className=" text-[12px]">Posted on {post.date}</p>
            <p className=" text-sm mt-[5px]">{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className=" text-blue-500 underline text-sm"
                  >{`#${tag.toLowerCase()} `}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
