import React from "react";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/ui/Inputs";

export default function AddressPage() {
  return (
    <form className="grid grid-cols-2 grow gap-x-4 gap-y-6">
      <Input
        label="Nationality"
        id="nationality_input"
        type="text"
        required={true}
      />
      <Input label="Region" id="region" type="text" required={true} />
      <Input
        label="Zone/Sub-city"
        id="nationality_input"
        type="text"
        required={true}
      />
      <Input
        label="Wereda"
        id="nationality_input"
        type="text"
        required={true}
      />
      <Input
        label="Kebele"
        id="nationality_input"
        type="text"
        required={true}
      />
      <Input
        label="House No."
        id="nationality_input"
        type="text"
        required={true}
      />
      <SubmitButton isActive={false} label="Next" />
    </form>
  );
}
