import classNames from "classnames";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const RoleButtons = () => {
  const { search } = useLocation();
  const role = new URLSearchParams(search).get("role") || "student";

  let buttonStyle = (link: string) => classNames({
    "px-6 py-3 md:py-1.5 grow md:grow-0 uppercase flex items-center justify-center": true,
    "bg-primaryOrange text-white": role === link,
    "text-gray-600 bg-gray-100": role !== link,
    "md:rounded-tl-2xl": link === "student",
    "md:rounded-br-2xl": link === "admin"
  });

  return (
    <div className="flex items-start md:mt-0 md:ml-3 text-sm">
      <div className={buttonStyle("student")}>
        <Link to="?role=student">Student</Link></div>
      <div className={buttonStyle("admin")}>
        <Link to="?role=admin">Admin</Link>
      </div>
    </div>
  );
};

export default RoleButtons;
