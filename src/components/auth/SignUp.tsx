import React from "react";
import Input from "../ui/Inputs";
import SignUpProgress from "../ui/SignUpProgres";

const SignUp = () => {
  return (
    <>
      <div className="flex  flex-row-reverse items-center">
        {/* label */}
        <div className=" relative">
          <SignUpProgress
            status="notStarted"
            step={1}
            label="Basic Information"
          />
          <SignUpProgress status="completed" step={2} label="Address" />
          <SignUpProgress
            status="onProgress"
            step={3}
            label="Education Background"
          />
          <SignUpProgress status="notStarted" step={4} label="Password" />
          <SignUpProgress
            status="notStarted"
            step={5}
            label="Terms & Service"
          />
          <div className="h-full absolute left-7 z-0 border-r border-gray-500 top-0"></div>
        </div>

        <div className="grow grid grid-cols-2  gap-5">
          <div className="col-span-2 mb-6">
            <h1 className="text-3xl text-gray-700">Welcome, Register</h1>
            <p className="text-sm mt-2 text-gray-600">
              This is a little background about Burayu TVET college. Something
              to showoff its legitmate. This is a little background about Burayu TVET college. Something
              to showoff its legitmate.
            </p>
            <p className="text-gray-800 mt-3 text-sm">
              Please provide all the fields marked with{" "}
              <span className="text-red-500">*</span>.
            </p>
          </div>

          <Input label="Full Name" id="name" type="text" required={true} />
          <Input
            label="Nationality"
            id="nationality_input"
            type="text"
            required={true}
          />
          <Input
            label="Telephone"
            id="telephone_input"
            type="phone"
            required={true}
          />
          <Input label="Email" id="email_input" type="email" required={true} />
          <Input
            label="Date of Birth"
            className="col-span-2"
            id="email_input"
            type="email"
            required={true}
          />
          <div className="col-span-2 flex flex-row-reverse">
            <button className="bg-primaryOrange text-white px-6 py-2 text-sm rounded-full ml-5">
              Skip
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 text-sm rounded-full">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
