import classNames from "classnames";
import React from "react";

const SubmitButton = ({ isActive, label }: { isActive: boolean, label: string }) => {
  const style = classNames({
    "px-6 py-2 text-sm rounded-full block ml-auto": true,
    "bg-primaryOrange text-white": isActive,
    "bg-gray-200 text-gray-700": !isActive,
  });
  
  return (
    <div className="col-span-2 mt-6">
      <button className={style}>{label}</button>
    </div>
  );
};

export default SubmitButton;
