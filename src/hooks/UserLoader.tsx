import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import NotificationContext from "../store/NotificationContext";

const useLoadUser = () => {
  const userCtx = useContext(UserContext);
  const notificationCtx = useContext(NotificationContext);

  const [isLoading, setIsLoding] = useState(false);
  
  if (!userCtx.loggedInUser) {
    setIsLoding(true);
    userCtx.fetchUser().then((errorMsg) => {
      setIsLoding(false);
      if (errorMsg) notificationCtx.setNotification(errorMsg, "error");
    });
  }

  return isLoading;
};

export default useLoadUser;