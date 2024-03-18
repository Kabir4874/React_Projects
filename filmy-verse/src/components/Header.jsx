import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className=" text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between">
      <span className=" cursor-pointer">
        Filmy<span className=" text-white">Verse</span>
      </span>
      <Button>
        <h1 className=" text-lg text-white flex items-center cursor-pointer">
          <AddIcon className=" mr-1" color="secondary" />
          Add New
        </h1>
      </Button>
    </div>
  );
};

export default Header;
