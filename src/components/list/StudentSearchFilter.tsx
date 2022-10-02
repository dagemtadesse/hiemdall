import React from "react";
import SearchIcon from "../../assets/search";

type StudentSearchFilter = {
  query: string;
  setQuery: (query: string) => void;
};

const StudentSearchFilter = ({ query, setQuery }: StudentSearchFilter) => {
  return (
    <div className=" md:w-1/3 ml-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-1.5 focus:outline-0 border-b border-gray-200 rounded-lg"
        placeholder="Search for students here"
      />
      <button className="-ml-5">
        <SearchIcon />
      </button>
    </div>
  );
};

export default StudentSearchFilter;
