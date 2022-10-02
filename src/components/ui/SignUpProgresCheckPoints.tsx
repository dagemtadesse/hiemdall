import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import CheckIcon from "../../assets/check";

type ProgressItem = {
  label: string;
  step: number;
  link: string;
  current: number;
  max: number;
};

const SignUpProgressCheckPoint = ({
  link,
  label,
  step,
  current,
  max,
}: ProgressItem) => {

  const indexStyle = classNames({
    "flex border justify-center z-10 bg-white items-center self-center rounded-full w-7 h-7 mr-6 ml-4": true,
    "bg-primaryOrange border-primaryOrange text-white": step === current,
    "text-gray-700": step > current,
  });

  const linkStyle = classNames({
    'text-sm md:w-48 whitespace-nowrap': true,
    'text-gray-700': step <= max,
    'text-gray-400': step > max
  })

  return (
    <div className="flex flex-col-reverse items-start md:flex-row-reverse py-2 md:items-center gap-y-2">
      <section className={linkStyle}>
        <NavLink to={step <= max ? link : "#"}>{label}</NavLink>
      </section>
      <div className={indexStyle}>
        <span className="text-sm">{step < current ? <CheckIcon /> : step}</span>
      </div>
    </div>
  );
};

export default SignUpProgressCheckPoint;
