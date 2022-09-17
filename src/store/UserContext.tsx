import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

const token = "token";

export type User = {
  fullName: string;
  phone: string;
  email: string;
  sex: string;
  dateOfBirth: string;
  avatar: string;
  level: string;
  department: string;
  role: "student" | "admin" | "superAdmin";
  academicStatus: "promoted" | "failed" | "unknown";
};

export const UserContext = React.createContext({
  role: "student",
  loggedInUser: null as any,
  setRole: (role: string) => {},
  login: async (
    emailOrPhone: string,
    password: string
  ): Promise<string | undefined> => void 0,
  signup: async (userData: any): Promise<string | undefined> => undefined,
  fetchUser: async (): Promise<string | undefined> => undefined,
  updateUser: async (data: any): Promise<string | undefined> => undefined,
  logout: () => {},
});

const UserContextProvider = ({ children }: any) => {
  const [role, setRole] = useState("Student");
  const [loggedInUser, setLoggedInUser] = useState<any | undefined>();

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

  const fetchUser = async (id: number = 1) => {
    const userUrl = `https://6324be669075b9cbee415bd5.mockapi.io/api/v1/students/${id}`;
    try {
      const response = await fetch(userUrl);
      if (!response.ok) {
        throw new Error();
      }
      const user = await response.json();
      setLoggedInUser(user);
    } catch (error) {
      return "Unable to load user data.";
    }
  };

  const updateUser = async (data: any | FormData) => {
    const updateUserUrl = `https://6324be669075b9cbee415bd5.mockapi.io/api/v1/students/1`;
    
    try {
      const response = await fetch(updateUserUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: data instanceof FormData ? data : JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }
      const user = await response.json();
      setLoggedInUser(user);
    } catch (error) {
      return "Unable to update user profile.";
    }
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
        fetchUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
