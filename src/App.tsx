import React from "react";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SideNav from "./components/layout/SideNav";

function App() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 w-screen min-h-screen relative">
      <SideNav />

      <div className="bg-white col-span-3 grow">
        {/* language */}
        <div className="md:my-2 flex flex-col md:flex-row md:justify-between md:px-8 ">
          <ul className="py-2 px-4 md:px-0 flex text-sm font-normal items-center justify-between absolute bottom-0 w-full md:w-auto md:relative">
            <li className="flex items-center">
              English
              <span className="bg-gray-900 p-2 ml-2 inline-block rounded-full"></span>
            </li>
            <li className="ml-8 flex text-gray-500">Afan Oromo</li>
            <li className="ml-8 text-gray-500">Amharic</li>
          </ul>

          <div className="flex items-start md:mt-0 md:ml-3 text-sm">
            <div className="bg-primaryOrange text-white px-6 py-3 md:py-1.5 grow md:grow-0 md:rounded-tl-2xl uppercase flex items-center justify-center">
              Student
            </div>
            <div className="px-6 md:py-1.5 md:rounded-br-2xl text-gray-600 py-3 grow md:grow-0 bg-gray-100 uppercase text-center flex items-center justify-center">
              Admin
            </div>
          </div>
        </div>
        {/* loging */}
        <div className="p-4 py-8 md:p-8 ">
          

          {/* <Login /> */}
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
