import { useState } from "react";

const Product = ({ post }) => {
  const [selected,setSelected]=useState(false);
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>{ selected ? <p>Remove Item</p> : <p>Add to Card</p>}</button>
    </div>
  );
};

export default Product;
