import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import left from "../../assets/arrow.svg";
import ArrowIcon from "../../assets/ArrowIcon";
import { UserContext } from "../../store/UserContext";
import LogoutButton from "../auth/LogoutButton";
import SideNavLink from "./SideNavLink";

const SideNav = () => {
  const userContext = useContext(UserContext);

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
      {!userContext.loggedInUser && (
        <>
          {/* w-6 h-6 inline ml-6 md:ml-12 */}
          <SideNavLink label="Register" link="/signup" icon={<ArrowIcon />} />
          <SideNavLink label="Login" link="/login" icon={<ArrowIcon />} />
        </>
      )}
      {/* logout button */}
      {userContext.loggedInUser && <LogoutButton />}

      <div className="absolute hidden md:block bottom-0 font-thin text-center text-sm w-full">
        2022 &copy; Burayu.TVET.com
      </div>
    </div>
  );
};

export default SideNav;
