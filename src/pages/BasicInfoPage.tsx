import React, { useContext, useEffect, useReducer, useState } from "react";
import SignUpInput from "../components/auth/SignUpInputs";
import SubmitButton from "../components/auth/SubmitButton";
import { FormContext } from "../store/FormContext";
import { DOBValidator, emailValidator, fullNameValidator, phoneValidator } from "../validators";


const BasicInfoPage = () => {
  const ctx = useContext(FormContext);
  
  useEffect(() => {
    ctx.addFields(['name', 'phone', 'email',  'birthDate'])
  }, [])

  const formIsValid = !(ctx.invalidFields.size);

  return (
    <form className="grid md:grid-cols-2 grow gap-x-4 gap-y-4">
      <SignUpInput
        label="Full Name"
        field="name"
        type="text"
        required={true}
        validator={fullNameValidator}
      />

      <SignUpInput
        label="Telephone"
        field="phone"
        type="phone"
        required={true}
        validator={phoneValidator}
      />

      <SignUpInput
        label="Email"
        field="email"
        type="email"
        required={false}
        validator={emailValidator}
      />

      <SignUpInput
        label="Sex"
        field="sex"
        type="select"
        options={["Male", "Female"]}
        required={true}
        validator={(value) => value}
      />

      <SignUpInput
        label="Date of Birth"
        field="birthDate"
        type="date"
        required={true}
        validator={DOBValidator}
      />

      <SubmitButton isActive={formIsValid} label="Next" dest="/signup/address"/>
    </form>
  );
};

export default BasicInfoPage;
