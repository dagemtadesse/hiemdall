import React, { createContext, useState } from "react";

export type notificaton = {
  msg: string | null,
  type:  "error" | "success" | "failure";
}

const NotificationContext = createContext({
  notificaton: null as notificaton | null,
  setNotification: (msg: string, type?: any) => {},
  removeNotification: () => {},
});

export const NotificationProvider = ({ children }: any) => {
  const [notificaton, setNotification] = useState<notificaton | null>(null);

  return (
    <NotificationContext.Provider
      value={{
        notificaton,
        setNotification: (msg, type) => setNotification({ msg, type }),
        removeNotification: () => setNotification(null),
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
