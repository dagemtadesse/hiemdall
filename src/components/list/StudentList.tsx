import React, { useEffect, useState, useContext } from "react";
import FrownIcon from "../../assets/FrowIcon";
import NotificationContext from "../../store/NotificationContext";
import StudentListContext from "../../store/StudentListContext";
import { ProgressIndicator } from "../ui/RequestIndicator";
import StudentItem from "./StudentItem";

// const studentsList = [
//   { name: "Abraham Abraraw Longtextfgrand", department: "Wood Work", level: 3 },
//   { name: "Almaz Abraraw", department: "Wood Work", level: 3 },
//   { name: "Dagem Abraraw", department: "Wood Work", level: 3 },
//   { name: "Naomi Abraraw", department: "Wood Work", level: 3 },
//   { name: "Henok Abraraw", department: "Wood Work", level: 3 },
// ];

const contains = (base: string, filter: string): boolean => {
  return base.toLowerCase().includes(filter);
};

export default function StudentList({ filter }: { filter: string }) {
  const [isLoading, setIsLoading] = useState(true);

  const studentListCtx = useContext(StudentListContext);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    studentListCtx.fetchStudents().then((error) => {
      if (error) notificationCtx.setNotification(error);
      setIsLoading(false);
    });
  }, []);

  const lowerCaseFilter = filter.toLowerCase();
  const { students } = studentListCtx;

  return (
    <>
      <ul className="mt-6">
        {/* render the list */}
        {studentListCtx.students
          .filter(
            (item) =>
              contains(item.firstName, lowerCaseFilter) ||
              contains(item.lastName, lowerCaseFilter)
          )
          .map((student, index) => (
            <StudentItem
              key={index}
              no={index + 1}
              student={student}
            />
          ))}
        {/* if the list is empty of null */}
        {students && students.length === 0 && (
          <div className="text-4xl text-center text-gray-600 mt-10">
            <div className="flex justify-center my-3">
              <FrownIcon />
            </div>
            There is no student in the system.
          </div>
        )}
      </ul>
      {isLoading && <ProgressIndicator />}
    </>
  );
}
