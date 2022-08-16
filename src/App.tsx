import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import RoleButtons from "./components/auth/RoleButtons";
import LanguageChoice from "./components/LanguageChoice";
import SideNav from "./components/layout/SideNav";
import AddressPage from "./pages/AddressPage";
import BasicInfoPage from "./pages/BasicInfoPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import EducationalBackgroundPage from "./pages/EducationalBackgroundPage";
import ProfilePage from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
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
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/*" element={<SignUpPage />}>
              <Route path="*" element={<BasicInfoPage />} />
              <Route path="basic_info" element={<BasicInfoPage />} />
              <Route path="address" element={<AddressPage />} />
              <Route
                path="edu_background"
                element={<EducationalBackgroundPage />}
              />
              <Route path="password" element={<CreatePasswordPage />} />
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/student-list" element={<StudentListPage />} />
          </Routes>
        </main>
 
      </div>
    </div>
  );
}

export default App;
