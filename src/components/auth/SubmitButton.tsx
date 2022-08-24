import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = ({ isActive, label, dest }: { isActive: boolean, label: string, dest: string }) => {
  const style = classNames({
    "px-6 py-2 text-sm rounded-full": true,
    "bg-primaryOrange text-white": isActive,
    "bg-gray-200 text-gray-700": !isActive,
  });
  
  return (
    <div className="md:col-span-2  mb-4 flex justify-end">
      <Link to={isActive ? dest : "#"} className={style} >{label}</Link>
    </div>
  );
};

export default SubmitButton;
