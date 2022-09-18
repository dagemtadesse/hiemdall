import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import ListIcon from "../../assets/ListIcon";
import UserIcon from "../../assets/UserIcon";

const ProfileNavigation = () => {
  let buttonStyle = (isActive: boolean) =>
    classNames({
      "px-6 py-3 md:py-1.5 grow md:grow-0 flex items-center justify-center": true,
      "bg-primaryOrange text-white": isActive,
      "text-gray-600 bg-gray-100": !isActive,
    });

  return (
    <div className="w-full flex md:w-auto text-sm overflow-hidden md:rounded-full">
      <NavLink
        className={(navData) => buttonStyle(navData.isActive)}
        to="/student-list"
      >
        <span className="mr-2">
          <ListIcon />
        </span>
        Student List
      </NavLink>

      <NavLink
        className={(navData) => buttonStyle(navData.isActive)}
        to="/profile"
      >
        <span className="mr-2">
          <UserIcon />
        </span>
        Profile
      </NavLink>
    </div>
  );
};

export default ProfileNavigation;
