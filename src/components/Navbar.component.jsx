import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  const [navClassName, setNavClassName] = useState("");

  const ClassName = () => {
    if (open) {
      const toggleClassName =
        "bg-purple-900 text-white flex flex-col justify-center items-center gap-4 w-full fixed z-10 top-0 left-0 min-h-screen transition-all duration-400";
      setNavClassName(toggleClassName);
    } else {
      const toggleClassName =
        "bg-purple-900 text-white flex flex-col justify-center items-center gap-4 w-0 fixed z-10 top-0 left-0 transition-all duration-400";
      setNavClassName(toggleClassName);
    }
  };

  useEffect(() => {
    ClassName();
  }, [open]);
  return (
    <nav className=" fixed w-full  z-20 lg:px-20 lg:py-5 p-3 bg-purple-900 text-white font-bold flex justify-between items-center">
      <div className="w-3/4 mx-auto flex justify-between">
        <NavLink to="/">BookShopbyDay</NavLink>
        <ul className="flex justify-between gap-4 lg:text-base text-xs max-sm:hidden">
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
      </div>
      <UseAnimations
        className=" max-sm:block hidden"
        animation={menu4}
        strokeColor="#ffffff"
        size={30}
        onClick={handleMenu}
      />

      {open && (
        <ul className={navClassName}>
          <li onClick={handleMenu} className="w-fit">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={handleMenu} className="w-fit">
            <NavLink to="/store">Store</NavLink>
          </li>
          <li onClick={handleMenu} className="w-fit">
            <NavLink to={"/aboutus"}>About us</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarComponent;
