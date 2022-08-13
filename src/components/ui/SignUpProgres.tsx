import React from "react";
import CheckIcon from "../../assets/check";
import check from "../../assets/check.svg";

type ProgressItem = {
  label: string;
  step: number;
  status: "completed" | "onProgress" | "notStarted";
};

const SignUpProgress = ({ label, step, status }: ProgressItem) => {

    let marker : any  = step
    const completedClsName = status == 'onProgress' ? "bg-primaryOrange text-white" : "border-gray-400"

    if (status == "completed"){
        marker = <CheckIcon />
    }

  return (
    <div className="flex flex-row-reverse py-2 items-center">
      <section className="text-sm text-gray-700 w-48 ">{label}</section>
      <div className={"flex  border justify-center z-10 bg-white items-center rounded-full w-7 h-7 mr-6 ml-4 " + completedClsName}>
        <span className="text-sm">{marker}</span>
      </div>
    </div>
  );
};

export default SignUpProgress;
