import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import RoleButtons from "./components/auth/RoleButtons";
import SignUp from "./components/auth/SignUp";
import LanguageChoice from "./components/LanguageChoice";
import SideNav from "./components/layout/SideNav";

function App() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 w-screen min-h-screen relative">
      <SideNav />

      <div className="bg-white col-span-3 grow">
        {/* language */}
        <div className="md:my-2 flex flex-col md:flex-row md:justify-between md:px-8 ">
          <LanguageChoice />
          <RoleButtons />
        </div>
        {/* loging */}
        <div className="p-4 py-8 md:p-8 ">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/*" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
