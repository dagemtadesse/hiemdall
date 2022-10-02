import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import LoginInput from "../components/auth/LoginInput";
import useValidated from "../hooks/validated";
import { UserContext } from "../store/UserContext";
import validator from "validator";
import ReactDOM from "react-dom";
import RequestIndicator from "../components/ui/RequestIndicator";
import NotificationContext from "../store/NotificationContext";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailBlured, setEmailBlured] = useState(false);
  const [passwdBlured, setPasswdBlured] = useState(false);

  const {
    value: id,
    setValue: setId,
    error: idError,
    validatorFn: idValidator,
  } = useValidated(emailBlured, (value) => {
    if (validator.isEmail(value) || validator.isMobilePhone(value)) return;
    return "Please provide a valid Phone number or Email address.";
  });

  const {
    value: passwd,
    setValue: setPasswd,
    error: passwdError,
    validatorFn: passwdValidator,
  } = useValidated(passwdBlured, (value) => {
    if (validator.isStrongPassword(value, { minUppercase: 0 })) return;
    return "The password must be atleast 8 characters and must contain atleast 1 number and 1 symbol";
  });

  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const notificationCtx = useContext(NotificationContext);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    idValidator(id);
    passwdValidator(passwd);

    if (id && passwd) {
      setIsLoading(true);
      const error = await userContext.login(id, passwd);
      setIsLoading(false);
      if (!error) {
        navigate("/profile");
        return;
      }
      notificationCtx.setNotification(error);
    }
  };

  return (
    <>
      <div className=" p-4 py-8 md:p-8 ">
        <div className="max-w-sm md:mt-16 ">
          <h1 className="text-3xl text-gray-700">Welcome, Login</h1>
          <p className="text-sm mt-1 text-gray-600">
            Provide your phone number or email address and password to log in as
            a student.
          </p>
        </div>

        <div className="mt-10 max-w-sm">
          <form onSubmit={handleLogin}>
            <LoginInput
              label="Email or password"
              id="email-or-phone"
              type="text"
              value={id}
              error={idError}
              setValue={setId}
              setBlured={setEmailBlured}
            />

            <LoginInput
              id="password"
              label="Password"
              type="password"
              value={passwd}
              setValue={setPasswd}
              error={passwdError}
              setBlured={setPasswdBlured}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primaryOrange px-8 py-2 rounded-full mt-8 text-white ml-auto uppercase text-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {isLoading &&
        ReactDOM.createPortal(
          <RequestIndicator />,
          document.getElementById("overlay")!
        )}
    </>
  );
};

export default Login;
