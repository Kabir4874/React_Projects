import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <NavLink to="/">
          <div>
            <img src="../assets/logo.png" className="h-14"/>
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
