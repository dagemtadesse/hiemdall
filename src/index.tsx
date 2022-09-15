import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FormContextProvider from "./store/FormContext";
import { NotificationProvider } from "./store/NotificationContext";
import UserContextProvider from "./store/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <NotificationProvider>
      <UserContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </UserContextProvider>
    </NotificationProvider>
  </BrowserRouter>
);
