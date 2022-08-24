import React from "react";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/ui/Inputs";

export default function EducationalBackgroundPage() {
  return (
    <form className="grid grid-cols-2 grow gap-x-4 gap-y-6">
      <Input
        label="TVET Departments/Programs"
        id="nationality_input"
        type="text"
        required={true}
      />
      <SubmitButton isActive={false} label="Next" />
    </form>
  );
}
