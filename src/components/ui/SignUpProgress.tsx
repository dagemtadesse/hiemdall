import React, { useState } from "react";
import SignUpProgressCheckPoint from "./SignUpProgresCheckPoints";

const PROGRESSCHECKPOINTS = [
  {
    label: "Basic Information",
    link: "basic_info",
  },
  {
    label: "Addresss",
    link: "address",
  },
  {
    label: "Education Background",
    link: "edu_background",
  },
  {
    label: "Password",
    link: "password",
  }
];

const SignUpProgress = () => {
  const [currentPoint, setCurrentPoint] = useState(1);

  return (
    <div className="relative flex md:block overflow-x-auto w-full md:w-auto h-full gap-x-6 mb-4">
      {PROGRESSCHECKPOINTS.map(({ label, link }, index) => {
        return (
          <SignUpProgressCheckPoint
            label={label}
            current={currentPoint}
            setCurrent={setCurrentPoint}
            link={link}
            step={index + 1}
            key={index}
          />
        );
      })}
      <div className="md:h-full w-full  inline-block md:w-0 absolute md:left-7 z-0 border-t md:border-t-0 md:border-r border-gray-500 top-5 md:top-0"></div>
    </div>
  );
};

export default SignUpProgress;
