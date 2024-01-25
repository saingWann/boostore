import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="lg:px-20 lg:py-5 px-10 py-4 bg-purple-900 text-white font-bold flex justify-between items-center">
      <NavLink to="/">BookShopbyDay</NavLink>
      <ul className="flex justify-between gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to={"/aboutus"}>About us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
