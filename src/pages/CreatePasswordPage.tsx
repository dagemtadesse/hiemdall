import React, { useContext, useEffect } from "react";
import SignUpInput from "../components/auth/SignUpInputs";
import SubmitButton from "../components/auth/SubmitButton";
import { FormContext } from "../store/FormContext";
import { confirmPasswordValidator, passwordValidator } from "../validators";

export default function CreatePasswordPage() {
  const form = useContext(FormContext);

  useEffect(() => {
    form.addFields(['password', 'confirmPassword'])
  }, [])

  return (
    <form className="grow gap-x-4 gap-y-6">
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
      <SubmitButton isActive={!(form.invalidFields.size)} label="Next" dest="" />
    </form>
  );
}
