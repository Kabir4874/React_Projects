import { useContext, useState } from "react";
import { Context } from "../context/contextApi";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className=" sticky top-0 z-10 flex items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className=" flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className=" flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className=" text-white text-xl" />
            ) : (
              <SlMenu className=" text-white text-xl" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
