import React from "react";
import LogoutIcon from "../../assets/LogoutIcon";

const LogoutButton = () => {
  return (
    <button className="border-2 border-gray-900 rounded-full py-2 px-5 md:ml-12 md:mt-10">
      Logout <LogoutIcon />{" "}
    </button>
  );
};

export default LogoutButton;
