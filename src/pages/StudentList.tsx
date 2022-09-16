import React, { useState, useContext } from "react";

import StudentList from "../components/list/StudentList";
import StudentSearchFilter from "../components/list/StudentSearchFilter";
import ProfileHeader from "../components/profile/ProfileHeader";
import { StudentListContextProvider } from "../store/StudentListContext";

const StudentListPage = () => {
  const [query, setQuery] = useState("");

  return (
    <StudentListContextProvider>
      <ProfileHeader name="Douglas Bartholomew" role="admin" active={false} />
      <div className="max-w-4xl md:mx-auto mx-2">
        <StudentSearchFilter query={query} setQuery={setQuery} />
        <StudentList filter={query} />
      </div>
    </StudentListContextProvider>
  );
};

export default StudentListPage;
