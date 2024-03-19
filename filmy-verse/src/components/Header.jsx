import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between">
      <Link to={"/"}>
        <span className=" cursor-pointer">
          Filmy<span className=" text-white">Verse</span>
        </span>
      </Link>
      <Link to={"/addmovie"}>
        <Button>
          <h1 className=" text-lg text-white flex items-center cursor-pointer">
            <AddIcon className=" mr-1" color="secondary" />
            Add New
          </h1>
        </Button>
      </Link>
    </div>
  );
};

export default Header;
