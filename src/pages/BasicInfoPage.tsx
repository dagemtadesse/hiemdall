import React from "react";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/ui/Inputs";

const BasicInfoPage = () => {
  return (
    <form className="grid md:grid-cols-2 grow gap-x-4 gap-y-4">
      <Input label="Full Name" id="name" type="text" required={true} />
      <Input
        label="Nationality"
        id="nationality_input"
        type="text"
        required={true}
      />
      <Input
        label="Telephone"
        id="telephone_input"
        type="phone"
        required={true}
      />
      <Input label="Email" id="email_input" type="email" required={true} />
      <Input
        label="Date of Birth"
        className="md:col-span-2"
        id="email_input"
        type="email"
        required={true}
      />

      <SubmitButton isActive={false} label="Next" />
    </form>
  );
};

export default BasicInfoPage;
