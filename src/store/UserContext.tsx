import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

const token = "token";

export const UserContext = React.createContext({
  role: "student",
  loggedInUser: { role: "student" } as any,
  setRole: (role: string) => {},
  login: async (
    emailOrPhone: string,
    password: string
  ): Promise<string | undefined> => {
    return;
  },
  signup: async (userData: any): Promise<string | undefined> => {
    return;
  },
  logout: () => {},
});

const UserContextProvider = ({ children }: any) => {
  const [role, setRole] = useState("Student");
  const [loggedInUser, setLoggedInUser] = useState<any | undefined>({ role: "student" });

  const handleLogin = async (emailOrPhone: string, password: string) => {
    const loginURL = "https://jsonplaceholder.typicode.com/users";

    const body = JSON.stringify({
      email: isEmail(emailOrPhone) ? emailOrPhone : undefined,
      phoneNumber: !isEmail(emailOrPhone) ? emailOrPhone : undefined,
      password,
    });

    try {
      const response = await fetch(loginURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (!response.ok) {
        return "The email/phone number doesn't match the password.";
      }

      const data = await response.json();
      setLoggedInUser({ ...data, role });
      localStorage.setItem(token, data.token);
    } catch (error) {
      return "Unable to login please try again.";
    }
  };

  const handleSignup = async (userData: any) => {
    const signupURL = "";

    try {
      const response = await fetch(signupURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        return "Unable to regsiter.";
      }
      const user = await response.json();
      setLoggedInUser(user);
      localStorage.setItem(token, user.token);
    } catch (error) {
      return "Unable to regsiter.";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        role,
        loggedInUser,
        setRole,
        logout: handleLogout,
        login: handleLogin,
        signup: handleSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
