import React, { useState } from "react";

export const UserContext = React.createContext({
  role: "student",
  loggedInUser: null,
  setRole: (role: string) => {},
  login: () => {},
});

const UserContextProvider = ({ children }: any) => {
  const [role, setRole] = useState("Student");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    setLoggedInUser({role: role} as any)
  }

  return (
    <UserContext.Provider
      value={{
        role,
        loggedInUser,
        login: handleLogin,
        setRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
