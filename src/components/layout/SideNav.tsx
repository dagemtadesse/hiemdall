import React from "react";
import { NavLink } from "react-router-dom";

import left from "../../assets/arrow.svg";

const SideNav = () => {
  let linkStyle = "border-2 border-gray-900 md:px-6 md:py-2 py-2 px-5 rounded-full md:ml-12 md:mt-10 inline-block";

  return (
    <div className="py-5 bg-white md:min-h-screen bg-opacity-40 backdrop-blur-md  md:block flex items-center justify-between px-4">
      <h1 className="font-medium text-xl text-center md:text-left md:text-4xl md:ml-12 md:mt-32">
        Buray TVET
        <span className="hidden md:inline">
          <br /> Student
          <br /> Management
          <br /> System
        </span>
      </h1>
      <NavLink
        to="/signup"
        className={navData => navData.isActive ? "hidden" : linkStyle}
      >
        Register
        <span>
          <img src={left} className="w-6 h-6 inline ml-6 md:ml-12" />
        </span>
      </NavLink>

      <NavLink
        to="/login"
        className={navData => navData.isActive ? "hidden" : linkStyle}
      >
        Login
        <span>
          <img src={left} className="w-6 h-6 inline ml-6 md:ml-12" />
        </span>
      </NavLink>

      <div className="absolute hidden md:block bottom-0 font-thin text-center text-sm w-full">
        2022 &copy; Burayu.TVET.com
      </div>
    </div>
  );
};

export default SideNav;
