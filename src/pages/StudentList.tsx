import React, { useState } from "react";
import StudentItem from "../components/list/StudentItem";
import StudentList from "../components/list/StudentList";
import StudentSearchFilter from "../components/list/StudentSearchFilter";
import ProfileHeader from "../components/profile/ProfileHeader";

const StudentListPage = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <ProfileHeader name="Douglas Bartholomew" role="admin" active={false} />
      <div className="max-w-4xl md:mx-auto mx-2">
        <StudentSearchFilter query={query} setQuery={setQuery} />
        <StudentList filter={query} />
      </div>
    </>
  );
};

export default StudentListPage;
