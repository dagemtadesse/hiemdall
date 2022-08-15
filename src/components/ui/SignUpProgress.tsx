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
  },
  {
    label: "Terms & Service",
    link: "terms_&_service",
  },
];

const SignUpProgress = () => {
  const [currentPoint, setCurrentPoint] = useState(1);

  return (
    <>
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
    </>
  );
};

export default SignUpProgress;
