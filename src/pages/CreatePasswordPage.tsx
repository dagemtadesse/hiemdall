import React from "react";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/ui/Inputs";

export default function CreatePasswordPage() {
  return (
    <form className="grow gap-x-4 gap-y-6">
      <Input
        label="Password"
        id="telephone_input"
        type="phone"
        required={true}
        className="max-w-sm"
      />
      <Input
        className="mt-6 max-w-sm"
        label="Confirm Password"
        id="telephone_input"
        type="phone"
        required={true}
      />
      <SubmitButton isActive={false} label="Next" />
    </form>
  );
}
