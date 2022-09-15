import classNames from "classnames";
import React, { useContext, useEffect } from "react";
import CloseIcon from "../../assets/CloseIcon";
import NotificationContext from "../../store/NotificationContext";

const NotificationPopup = () => {
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    setTimeout(() => notificationCtx.removeNotification(), 5000);
    // return () => clearTimeout(timer);
  }, [notificationCtx.notificaton]);

  const notificationStyle = classNames({
    "absolute bottom-4 left-4 bg-darkBrown py-2 px-3 z-50 rouded rounded-md min-w-[25%] gap-4 text-sm": true,
    "text-white shadow-md flex justify-between items-center transition-all duration-300 ease-in-out": true,
    'opacity-1': notificationCtx.notificaton,
    'opacity-0': !notificationCtx.notificaton,
  });

  return (
    <div className={notificationStyle}>
      {notificationCtx.notificaton}
      <button onClick={notificationCtx.removeNotification}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default NotificationPopup;
