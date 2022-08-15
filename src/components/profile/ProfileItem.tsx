import React, { useState } from "react";

type ProfileFiled = {
  field: string;
  value: string;
};

type TextButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const ProfileItem = ({ field, value }: ProfileFiled) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="border-b border-gray-200 items-center grid grid-cols-12 py-3.5 px-3 mt-2">
      <p className="text-gray-600 text-md col-span-3"> {field} </p>

      <section className="text-base text-gray-800 col-span-7">
        {!editing && value}
        {editing && <input value={value} type="" className="border border-gray-300 py-1.5 px-3 rounded w-4/5"/>}
      </section>

      <section className="col-span-2 flex flex-row-reverse gap-4">
        {editing && (
          <>
            <TextButton onClick={() => setEditing(false)} label="Cancle" />
            <TextButton onClick={() => setEditing(false)} label="Apply" />
          </>
        )}
        {!editing && (
          <TextButton onClick={() => setEditing(true)} label="Edit" />
        )}
      </section>
    </div>
  );
};

const TextButton = ({ onClick, label, className }: TextButtonProps) => {
  return (
    <button
      className={
        "text-blue-700 text-sm hover:underline underline-offset-2 " +
        (className || "")
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ProfileItem;
