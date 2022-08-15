import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNavigation = () => {
  let buttonStyle = (isActive: boolean) =>
    classNames({
      "px-6 py-3 md:py-1.5 grow md:grow-0 flex items-center justify-center": true,
      "bg-primaryOrange text-white": isActive,
      "text-gray-600 bg-gray-100": !isActive,
    });

  return (
    <div className="inline-flex items-start -mt-4 text-sm overflow-hidden rounded-full ml-auto">
      <NavLink
        className={(navData) => buttonStyle(navData.isActive)}
        to="/student-list"
      >
        Student
      </NavLink>

      <NavLink
        className={(navData) => buttonStyle(navData.isActive)}
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default ProfileNavigation;
