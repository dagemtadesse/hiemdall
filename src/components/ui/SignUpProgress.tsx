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
    <div className="relative">
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
      <div className="h-full absolute left-7 z-0 border-r border-gray-500 top-0"></div>
    </div>
  );
};

export default SignUpProgress;
