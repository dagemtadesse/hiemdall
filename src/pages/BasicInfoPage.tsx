import React, { useContext, useEffect, useReducer, useState } from "react";
import SignUpInput from "../components/auth/SignUpInputs";
import SubmitButton from "../components/auth/SubmitButton";
import { FormContext } from "../store/FormContext";


const BasicInfoPage = () => {
  const ctx = useContext(FormContext);
  
  useEffect(() => {
    ctx.addFields(['name', 'phone', 'email', 'sex', 'birthDate'])
  }, [])

  const formIsValid = !(ctx.invalidFields.size)

  return (
    <form className="grid md:grid-cols-2 grow gap-x-4 gap-y-4">
      <SignUpInput
        label="Full Name"
        field="name"
        type="text"
        required={true}
        validator={(value) => value}
      />

      <SignUpInput
        label="Telephone"
        field="phone"
        type="phone"
        required={true}
        validator={(value) => value}
      />

      <SignUpInput
        label="Email"
        field="email"
        type="email"
        required={false}
        validator={(value) => value}
      />

      <SignUpInput
        label="Sex"
        field="sex"
        type="email"
        required={true}
        validator={(value) => value}
      />

      <SignUpInput
        label="Date of Birth"
        field="birthDate"
        type="date"
        required={true}
        validator={(value) => value}
      />

      <SubmitButton isActive={formIsValid} label="Next" />
    </form>
  );
};

export default BasicInfoPage;
