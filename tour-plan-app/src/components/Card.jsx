import { useState } from "react";

const Card = ({ id, name, info, image, price }) => {
  const description = `${info.substring(0, 200)}....`;
  const [readmore, setReadmore] = useState(false);
  function readMoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="description">
        {description}
        <span className="read-more" onClick={readMoreHandler}>
          {readmore ? `show less` : `read more`}
        </span>
      </div>
    </div>
  );
};

export default Card;
