import classNames from "classnames";
import React, { useContext } from "react";
import NotificationContext from "../../store/NotificationContext";
import StudentListContext from "../../store/StudentListContext";
import { User } from "../../store/UserContext";

type StudentItemProps = {
  no: number;
  student: User;
};

const StudentItem = ({ no, student }: StudentItemProps) => {
  const studentListCtx = useContext(StudentListContext);
  const notificationCtx = useContext(NotificationContext);

  const listStyle = classNames({
    "grid grid-cols-12 items-baseline py-2.5 px-3 gap-y-3": true,
    "bg-gray-50": no % 2 == 0,
  });

  const clickHandler = (promote: boolean) => {
    return async () => {
      const error = await studentListCtx.gradeStudent(student.id, promote);
      if (error) notificationCtx.setNotification(error);
      let message = (promote ? "Promoted " : "Failed ") + student.fullName + ".";
      notificationCtx.setNotification(message, promote ? "success" : "failure");
    };
  };

  return (
    <li className={listStyle}>
      <p className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden md:col-span-4 text-base text-gray-700">
        <span className="inline-block w-10">{no}.</span>{" "}
        {student.fullName}
      </p>

      <p className="col-span-5 text-ellipsis whitespace-nowrap overflow-hidden md:col-span-4 text-sm text-gray-500">
        {student.department}, level {student.level}
      </p>

      <section className="col-span-12 md:col-span-4 flex gap-4 justify-end items-center text-sm">
        <button
          className="bg-red-500 bg-opacity-20 text-red-700 px-3 py-1 rounded"
          onClick={clickHandler(false)}
        >
          Fail
        </button>
        <button
          className="bg-green-500 bg-opacity-20 text-green-700 px-3 py-1 rounded"
          onClick={clickHandler(true)}
        >
          Promote
        </button>
      </section>
    </li>
  );
};

export default StudentItem;
