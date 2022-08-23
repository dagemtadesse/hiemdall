import classNames from "classnames";
import React from "react";

type StudentItemProps = {
  name: string;
  department: string;
  no: number;
  level: number;
};

const StudentItem = ({ no, department, level, name }: StudentItemProps) => {
  const listStyle = classNames({
    "grid grid-cols-12 items-baseline py-2.5 px-3 gap-y-3": true,
    "bg-gray-50": no % 2 == 0,
  });
  return (
    <li className={listStyle}>
      <p className="col-span-7 text-ellipsis whitespace-nowrap overflow-hidden md:col-span-4 text-base text-gray-700">
        <span className="inline-block w-10">{no}.</span> {name}
      </p>

      <p className="col-span-5 text-ellipsis whitespace-nowrap overflow-hidden md:col-span-4 text-sm text-gray-500 text-right">{department}, level {level}</p>

      <section className="col-span-12 md:col-span-4 flex gap-4 justify-end items-center text-sm">
        <button className="bg-red-500 bg-opacity-20 text-red-700 px-3 py-1 rounded">
          Fail
        </button>{" "}
        <button className="bg-green-500 bg-opacity-20 text-green-700 px-3 py-1 rounded">
          Promote
        </button>
      </section>
    </li>
  );
};

export default StudentItem;
