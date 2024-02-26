import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h2>Plan With Kabir</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </div>
  );
};

export default Tours;
