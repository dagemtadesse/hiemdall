import React, { useState, useContext } from "react";

import StudentList from "../components/list/StudentList";
import StudentSearchFilter from "../components/list/StudentSearchFilter";
import ProfileHeader from "../components/profile/ProfileHeader";
import { ProgressIndicator } from "../components/ui/RequestIndicator";
import useLoadUser from "../hooks/UserLoader";
import { StudentListContextProvider } from "../store/StudentListContext";
import { UserContext } from "../store/UserContext";

const StudentListPage = () => {
  const isLoading = useLoadUser();
  const userCtx = useContext(UserContext);
  const [query, setQuery] = useState("");

  return (
    <StudentListContextProvider>
      {userCtx.loggedInUser && (
        <>
          <ProfileHeader user={userCtx.loggedInUser} />
          <div className="max-w-4xl md:mx-auto mx-2">
            <StudentSearchFilter query={query} setQuery={setQuery} />
            <StudentList filter={query} />
          </div>
        </>
      )}
      {isLoading && <ProgressIndicator />}
    </StudentListContextProvider>
  );
};

export default StudentListPage;
