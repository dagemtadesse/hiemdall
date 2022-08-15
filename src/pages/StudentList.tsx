import React from "react";
import SearchIcon from "../assets/search";
import StudentItem from "../components/list/StudentItem";
import ProfileHeader from "../components/profile/ProfileHeader";

const StudentListPage = () => {
  return (
    <>
      <ProfileHeader name="Douglas Bartholomew" role="admin" active={false} />
      <div className="max-w-4xl mx-auto">
        <div>
          <div className="border-b border-gray-200 w-1/3 ml-auto">
            <input
              type="text"
              className="w-full p-1.5 focus:outline-0"
              placeholder="Search for students here"
            />
            <button className="-ml-5">
              <SearchIcon />
            </button>
          </div>

          <ul className="mt-6">
            {[1, 2, 3, 4].map((num) => (
              <StudentItem
                no={num}
                name="Abraham Abrarw"
                department="Wood Work"
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentListPage;
