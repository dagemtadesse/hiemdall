import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import SignUpInput from "../../components/auth/SignUpInputs";
import SubmitButton from "../../components/auth/SubmitButton";
import RequestIndicator from "../../components/ui/RequestIndicator";
import { FormContext } from "../../store/FormContext";
import NotificationContext from "../../store/NotificationContext";
import { UserContext } from "../../store/UserContext";
import { confirmPasswordValidator, passwordValidator } from "../../validators";

export default function CreatePasswordPage() {
  const navigate = useNavigate();
  const form = useContext(FormContext);
  const userCtx = useContext(UserContext);
  const notificationCtx = useContext(NotificationContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    form.addFields(["password", "confirmPassword"]);
  }, []);

  const onSubmitHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    // console.log(form.data);
    setIsLoading(true);
    // setTimeout(() =>{}, 5000)
    const error = await userCtx.signup(form.data);
    setIsLoading(false);
    if (!error) {
      navigate("/profile");
      return;
    } // password1!
    notificationCtx.setNotification(error); // console.log(userCtx.authError)
  };

  return (
    <>
      <form
        className="grow gap-x-4 gap-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <SignUpInput
          label="Password"
          field="password"
          type="password"
          required={true}
          className="max-w-sm"
          validator={passwordValidator}
        />
        <SignUpInput
          className="mt-6 max-w-sm"
          label="Confirm Password"
          field="confirmPassword"
          type="password"
          required={true}
          validator={confirmPasswordValidator.bind(null, form.data.password)}
        />

        <SubmitButton
          isActive={!form.invalidFields.size}
          label="Next"
          submitHandler={onSubmitHandler}
        />
      </form>

      {isLoading &&
        ReactDOM.createPortal(
          <RequestIndicator />,
          document.getElementById("overlay")!
        )}
    </>
  );
}
