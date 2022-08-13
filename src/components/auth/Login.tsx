import React from "react";
const Login = () => {
  return (
    <>
      <div className="max-w-sm md:mt-16">
        <h1 className="text-3xl text-gray-700">Welcome, Login</h1>
        <p className="text-sm mt-1 text-gray-600">
          Provide your phone number or email address and password to log in as a
          student.
        </p>
      </div>

      <div className="mt-10 max-w-sm">
        <form>
          <div>
            <label
              htmlFor="phone-emil-input"
              className="block text-gray-700 text-mg mb-2"
            >
              Phone or Email
            </label>
            <input
              type="text"
              id="phone-emil-input"
              className="border border-gray-400 rounded-md w-full py-2"
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor="password-input"
              className="block text-gray-700 text-md mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password-input"
              className="border border-gray-400 rounded-md w-full py-2"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-primaryOrange px-8 py-2 rounded-full mt-8 text-white ml-auto uppercase text-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
