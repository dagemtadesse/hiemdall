import React, { useContext, useEffect } from "react";
import SignUpInput from "../components/auth/SignUpInputs";
import SubmitButton from "../components/auth/SubmitButton";
import { FormContext } from "../store/FormContext";
import notEmptyValidator from "../validators";

export default function AddressPage() {
  const form = useContext(FormContext);

  useEffect(() => {
    form.addFields(['zone', 'wereda', 'kebele', 'houseNo'])
  }, [])

  return (
    <form className="grid grid-cols-2 grow gap-x-4 gap-y-6">
      <SignUpInput
        label="Nationality"
        field="nationality"
        type="select"
        required={true}
        options={["Ethiopian"]}
        validator={(value) => value}
      />
      <SignUpInput
        label="Region"
        field="region"
        type="select"
        required={true}
        options={["Amhara", "Oromiya", "Afar", "Tigray"]}
        validator={(value) => value}
      />
      <SignUpInput
        label="Zone/Sub-city"
        field="zone"
        type="text"
        required={true}
        validator={notEmptyValidator('zone/sub-city')}
      />
      <SignUpInput
        label="Wereda"
        field="wereda"
        type="text"
        required={true}
        validator={notEmptyValidator('Wereda')}
      />
      <SignUpInput
        label="Kebele"
        field="kebele"
        type="text"
        required={true}
        validator={notEmptyValidator('kebele')}
      />
      <SignUpInput
        label="House No."
        field="houseNo"
        type="text"
        required={true}
        validator={notEmptyValidator('House no.')}
      />
      <SubmitButton isActive={!(form.invalidFields.size)} label="Next" dest="/signup/edu_background"/>
    </form>
  );
}
