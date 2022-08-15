import React from "react";
import { NavLink } from "react-router-dom";

type SideNavLinkProps = {
  icon: any;
  label: string;
  link: string;
};

const SideNavLink = ({ icon, link, label }: SideNavLinkProps) => {
  let linkStyle =
    "border-2 border-gray-900 md:px-6 py-2  rounded-full md:ml-12 md:mt-10 inline-block";

  return (
    <NavLink
      to={link}
      className={(navData) => (navData.isActive ? "hidden" : linkStyle)}
    >
      {label}
      <span className=" ml-6 md:ml-12">{icon}</span>
    </NavLink>
  );
};

export default SideNavLink;
