import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RoleButtons from "./components/auth/RoleButtons";
import LanguageChoice from "./components/LanguageChoice";
import SideNav from "./components/layout/SideNav";
import AddressPage from "./pages/signup/AddressPage";
import BasicInfoPage from "./pages/signup/BasicInfoPage";
import CreatePasswordPage from "./pages/signup/CreatePasswordPage";
import EducationalBackgroundPage from "./pages/signup/EducationalBackgroundPage";
import ProfilePage from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
import StudentListPage from "./pages/StudentList";
import { UserContext } from "./store/UserContext";
import { FormContext } from "./store/FormContext";
import NotificationPopup from "./components/ui/Notification";
import NotificationContext from "./store/NotificationContext";

function App() {
  const userCtx = useContext(UserContext);
  const formCtx = useContext(FormContext);

  return (
    <>
      <NotificationPopup />

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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup/*" element={<SignUpPage />}>
                <Route path="*" element={<Navigate to="basic_info" />} />

                <Route path="basic_info" element={<BasicInfoPage />} />

                {formCtx.formCheckPoint >= 2 && (
                  <Route path="address" element={<AddressPage />} />
                )}
                {formCtx.formCheckPoint >= 3 && (
                  <Route
                    path="edu_background"
                    element={<EducationalBackgroundPage />}
                  />
                )}
                {formCtx.formCheckPoint >= 4 && (
                  <Route path="password" element={<CreatePasswordPage />} />
                )}
              </Route>

              {userCtx.loggedInUser && (
                <Route path="/profile" element={<ProfilePage />} />
              )}

              {userCtx.loggedInUser &&
                userCtx.loggedInUser.role === "admin" && (
                  <Route path="/student-list" element={<StudentListPage />} />
                )}

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
