import React from "react";
import { Outlet } from "react-router-dom";
import SignUpProgress from "../components/ui/SignUpProgress";
import FormContextProvider from "../store/FormContext";

const SignUpPage = () => {
  return (
    <div className=" p-4 py-8 md:p-8 ">
      <div className="">
        <div className="mb-6">
          <h1 className="text-3xl text-gray-700">Welcome, Register</h1>
          <p className="text-sm mt-2 text-gray-600">
            This is a little background about Burayu TVET college. Something to
            showoff its legitmate. This is a little background about Burayu TVET
            college. Something to showoff its legitmate.
          </p>
          <p className="text-gray-800 mt-3 text-sm">
            Please provide all the fields marked with{" "}
            <span className="text-red-500">*</span>.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-start">
          {/* forms */}
          <FormContextProvider>
            <Outlet />
          </FormContextProvider>
          {/* progress */}
          <SignUpProgress />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
