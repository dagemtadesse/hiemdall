import React from "react";
import StudentItem from "./StudentItem";

const studentsList = [
  { name: "Abraham Abraraw Longtextfgrand", department: "Wood Work", level: 3 },
  { name: "Almaz Abraraw", department: "Wood Work", level: 3 },
  { name: "Dagem Abraraw", department: "Wood Work", level: 3 },
  { name: "Naomi Abraraw", department: "Wood Work", level: 3 },
  { name: "Henok Abraraw", department: "Wood Work", level: 3 },
];

export default function StudentList({ filter }: { filter: string }) {
  const lowerCaseFilter = filter.toLowerCase();

  return (
    <ul className="mt-6">
      {studentsList
        .filter((item) => item.name.toLowerCase().includes(lowerCaseFilter))
        .map((student, index) => (
          <StudentItem
            key={index}
            no={index + 1}
            name={student.name}
            level={student.level}
            department={student.department}
          />
        ))}
    </ul>
  );
}
