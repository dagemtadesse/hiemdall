import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import RoleButtons from "./components/auth/RoleButtons";
import SignUp from "./components/auth/SignUp";
import LanguageChoice from "./components/LanguageChoice";
import SideNav from "./components/layout/SideNav";
import ProfilePage from "./pages/Profile";
import StudentListPage from "./pages/StudentList";
import { UserContext } from "./store/UserContext";

function App() {
  const userCtx = useContext(UserContext);
  
  return (
    <div className="font-body flex flex-col md:grid md:grid-cols-4 w-screen min-h-screen relative">
      <SideNav />

      <div className="bg-white col-span-3 grow">
        {/* language */}
        <div className="md:my-2 flex flex-col md:flex-row md:justify-between md:px-8 ">
          <LanguageChoice />
          {!userCtx.loggedInUser && <RoleButtons />}
        </div>
        {/* main content */}
        <div className=" ">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/*" element={<SignUp />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/student-list" element={<StudentListPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
