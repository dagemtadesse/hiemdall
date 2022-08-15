import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import CheckIcon from "../../assets/check";

type ProgressItem = {
  label: string;
  step: number;
  link: string;
  current: number;
  setCurrent: any;
};

const SignUpProgressCheckPoint = ({
  link,
  label,
  step,
  current,
  setCurrent,
}: ProgressItem) => {
  const indexStyle = classNames({
    "flex  border justify-center z-10 bg-white items-center rounded-full w-7 h-7 mr-6 ml-4": true,
    "bg-primaryOrange border-primaryOrange text-white": step === current,
    "text-gray-700": step > current,
  });

  return (
    <div className="flex flex-row-reverse py-2 items-center">
      <section className="text-sm text-gray-700 w-48 ">
        <NavLink
          to={link}
          className={(navData) => {
            if (navData.isActive) setCurrent(step);
            return "";
          }}
        >
          {label}
        </NavLink>
      </section>
      <div className={indexStyle}>
        <span className="text-sm">{step < current ? <CheckIcon /> : step}</span>
      </div>
    </div>
  );
};

export default SignUpProgressCheckPoint;