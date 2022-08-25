import classNames from "classnames";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../../store/FormContext";

const SubmitButton = ({
  isActive,
  label,
  dest,
}: {
  isActive: boolean;
  label: string;
  dest?: string;
}) => {
  const navigate = useNavigate();
  const form = useContext(FormContext);

  const style = classNames({
    "px-6 py-2 text-sm rounded-full": true,
    "bg-primaryOrange text-white": isActive,
    "bg-gray-200 text-gray-700": !isActive,
  });

  const clickHandler = () => {
    if (isActive && dest) {
      navigate(dest);
      form.nextForm();
    }
  };

  return (
    <div className="md:col-span-2  mb-4 flex justify-end">
      <button onClick={clickHandler} className={style}>
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
