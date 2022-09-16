import classNames from "classnames";
import React, { useContext, useEffect } from "react";
import CloseIcon from "../../assets/CloseIcon";
import NotificationContext from "../../store/NotificationContext";

const NotificationPopup = () => {
  const notificationCtx = useContext(NotificationContext);
  const { notificaton } = notificationCtx;

  useEffect(() => {
    const timer = setTimeout(() => notificationCtx.removeNotification(), 5000);
    return () => clearTimeout(timer);
  }, [notificaton]);

  const notificationStyle = classNames({
    "fixed bottom-4 left-4 py-2 px-3 z-50 rouded rounded-md min-w-[25%] gap-4 text-sm": true,
    "text-white shadow-md flex justify-between items-center transition-all duration-300 ease-in-out": true,
    "opacity-1": notificaton,
    "opacity-0": !notificaton,
    "bg-darkBrown": notificaton && notificaton.type === "error",
    "bg-green-700": notificaton && notificaton.type === "success",
    "bg-red-700": notificaton && notificaton.type === "failure",
  });

  return (
    <div className={notificationStyle}>
      {notificaton && notificaton.msg}
      <button onClick={notificationCtx.removeNotification}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default NotificationPopup;
