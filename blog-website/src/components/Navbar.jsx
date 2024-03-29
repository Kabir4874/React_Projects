import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className=" bg-black text-white fixed top-0 left-0 right-0">
      <nav className=" px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className=" text-xl font-bold text-white">
          Design<span className=" text-orange-500">DK</span>
        </a>
        {/* NavItems  */}
        <ul className=" md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-white">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        {/* Menu Icons  */}
        <div className=" text-white lg:flex gap-4 items-center hidden">
          <a href="/" className=" hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className=" bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in"
          >
            Log in
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Mobile Menu  */}
        <div className=" md:hidden">
          <button className=" cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className=" w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden px-4 py-6 mt-14 text-lg block space-y-4 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-300"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }, index) => (
            <li key={index} className=" text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
