import React from "react";
import left from "./assets/arrow.svg";

function App() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 w-screen min-h-screen relative">
      <div className="py-5 bg-white md:min-h-screen bg-opacity-40 backdrop-blur-md  md:block flex items-center justify-between px-4">
        <h1 className="font-medium text-xl text-center md:text-left md:text-4xl md:ml-12 md:mt-32">
          Buray TVET
          <span className="hidden md:inline">
            <br /> Student
            <br /> Management
            <br /> System
          </span>
        </h1>
        <a href="#" className="border-2 border-gray-900 md:px-6 md:py-2 py-2 px-5 rounded-full md:ml-12 md:mt-10 inline-block" >
          Register{" "}
          <span>
            <img src={left} className="w-6 h-6 inline ml-6 md:ml-12" />
          </span>
        </a>

        <div className="absolute hidden md:block bottom-0 font-thin text-center w-full">
          2022 &copy; Burayu.TVET.com
        </div>
      </div>

      <div className="bg-white col-span-3 grow">
        {/* language */}
        <div className="md:my-2 flex flex-col md:flex-row md:justify-between md:px-8 ">
          <ul className="py-2 px-4 md:px-0 flex text-sm font-normal items-center justify-between absolute bottom-0 w-full md:w-auto md:relative">
            <li className="flex items-center">
              English{" "}
              <span className="bg-gray-900 p-2 ml-2 inline-block rounded-full"></span>
            </li>
            <li className="ml-8 flex text-gray-500">Afan Oromo</li>
            <li className="ml-8 text-gray-500">Amharic</li>
          </ul>

          <div className="flex items-start md:mt-0 md:ml-3 text-sm">
            <div className="bg-primaryOrange text-white px-6 py-2 md:py-1.5 grow md:grow-0 md:rounded-tl-2xl uppercase flex items-center justify-center">
              Student
            </div>
            <div className="px-6 md:py-1.5 md:rounded-br-2xl text-gray-600 py-2 grow md:grow-0 bg-gray-100 uppercase text-center flex items-center justify-center">
              Admin
            </div>
          </div>
        </div>
        {/* loging */}
        <div className="p-4 py-8 md:p-8 md:mt-16">
          <div className="max-w-sm">
            <h1 className="text-3xl text-gray-700">Welcome, Login</h1>
            <p className="text-sm mt-1 text-gray-600">
              Provide your phone number or email address and password to log in
              as a student.
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
        </div>
      </div>
    </div>
  );
}

export default App;
