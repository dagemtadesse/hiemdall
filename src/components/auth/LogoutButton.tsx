import React, { useContext } from "react";
import { useNavigate } from "react-router";
import LogoutIcon from "../../assets/LogoutIcon";
import { UserContext } from "../../store/UserContext";

const LogoutButton = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userCtx.logout();
    navigate("/");
  };
  
  return (
    <button
      className="border-2 border-gray-900 rounded-full py-2 px-5 md:ml-12 md:mt-10"
      onClick={handleLogout}
    >
      Logout <LogoutIcon />{" "}
    </button>
  );
};

export default LogoutButton;
