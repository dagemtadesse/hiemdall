import React, { createContext, useState } from "react";
import { STUDENTLIST } from "../dummy-data";
import { User } from "./UserContext";

export const StudentListContext = createContext({
  students: [] as User[],
  fetchStudents: async (): Promise<string | undefined> => {
    return;
  },
  gradeStudent: async (
    id: string,
    promote: boolean
  ): Promise<string | undefined> => {
    return;
  },
});

export const StudentListContextProvider = ({ children }: any) => {
  const [students, setStudents] = useState<User[]>([]);

  const removeStudent = (id: string) => {
    setStudents((students) => students.filter((student) => student.id !== id));
  };

  const fetchStudents = async () => {
    const url = "https://6324be669075b9cbee415bd5.mockapi.io/api/v1/students";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const students = await response.json();
      setStudents(STUDENTLIST);
    } catch (error) {
      return "Unable to fetch student list.";
    }
  };

  const gradeStudent = async (id: string, promote: boolean) => {
    try {
      const gradeURL = `https://6324be669075b9cbee415bd5.mockapi.io/api/v1/students/${id}`;
      const response = await fetch(gradeURL, {
        method: "PUT",
        body: JSON.stringify({ promote }),
      });

      if (!response.ok) {
        throw new Error();
      }
      removeStudent(id);
    } catch (error) {
      return "Unable to grade a student.";
    }
  };

  return (
    <StudentListContext.Provider
      value={{ students, fetchStudents, gradeStudent }}
    >
      {children}
    </StudentListContext.Provider>
  );
};

export default StudentListContext;
