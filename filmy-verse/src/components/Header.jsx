import AddIcon from "@mui/icons-material/Add";
const Header = () => {
  return (
    <div className=" text-3xl text-red-500 font-bold p- border-b-2 border-gray-500 flex justify-between">
      <span>
        Filmy<span className=" text-white">Verse</span>
      </span>
      <h1 className="">
        <AddIcon className=" mr-2" />
        Add New
      </h1>
    </div>
  );
};

export default Header;
