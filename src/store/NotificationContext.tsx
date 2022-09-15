import React, { createContext, useState } from "react";

const NotificationContext = createContext({
  notificaton: {} as any,
  setNotification: (msg: string) => {},
  removeNotification: () => {},
});

export const NotificationProvider = ({ children }: any) => {
  const [notificaton, setNotification] = useState<string | null>(null);

  return (
    <NotificationContext.Provider
      value={{
        notificaton,
        setNotification,
        removeNotification: () => setNotification(null),
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
