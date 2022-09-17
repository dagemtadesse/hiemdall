import React, { FormEvent, useRef, useState } from "react";
import { useContext } from "react";
import NotificationContext from "../../store/NotificationContext";
import { UserContext } from "../../store/UserContext";
import { ErrMsg } from "../../validators";

type ProfileFiled = {
  field: string;
  initialValue: string;
  type: string;
  validator: (val: string) => ErrMsg;
};

type TextButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const ProfileItem = ({ field, initialValue, validator, type }: ProfileFiled) => {
  const userCtx = useContext(UserContext);
  const notificationCtx = useContext(NotificationContext);

  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState(initialValue);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validator(value);
    setError(error ? error : null);
    if(!error){
      userCtx.updateUser({field: value}).then(errMsg => {
        if(errMsg) notificationCtx.setNotification(errMsg, 'error');
        else notificationCtx.setNotification("Updated your profile.", 'success')
      })
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setError(null);
    setValue(initialValue);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="border-b border-gray-200 items-center grid grid-cols-12 py-3.5 px-3 mt-2 gap-y-3">
        <p className="text-gray-600 text-md md:col-span-3 col-span-12">
          {" "}
          {field}{" "}
        </p>

        <section className="text-base text-gray-800 md:col-span-7 col-span-9">
          {!editing && value}
          {editing && (
            <div className="w-4/5">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                className="border border-gray-300 py-1.5 px-3 rounded"
              />
              <p className="text-xs text-red-600 mt-1">{error}</p>
            </div>
          )}
        </section>

        <section className="col-span-3 md:col-span-2 flex flex-row-reverse gap-4">
          {editing && (
            <>
              <TextButton onClick={handleCancel} label="Cancle" />
              <TextButton onClick={() => {}} label="Apply" />
            </>
          )}
          {!editing && (
            <TextButton onClick={() => setEditing(true)} label="Edit" />
          )}
        </section>
      </div>
    </form>
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
