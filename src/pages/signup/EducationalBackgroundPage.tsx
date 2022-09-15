import React, { useContext } from "react";
import SignUpInput from "../../components/auth/SignUpInputs";
import SubmitButton from "../../components/auth/SubmitButton";
import { FormContext } from "../../store/FormContext";

export default function EducationalBackgroundPage() {
  const form = useContext(FormContext);
  
  return (
    <form className="grid grid-cols-2 grow gap-x-4 gap-y-6" onSubmit={e => e.preventDefault()}>
      <SignUpInput
        label="TVET Departments/Programs"
        field="nationality_input"
        type="select"
        options={[]}
        required={true}
        validator={value => value}
      />
      <SubmitButton isActive={!(form.invalidFields.size)} label="Next" dest="/signup/password"/>
    </form>
  );
}
