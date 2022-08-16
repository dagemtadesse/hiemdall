import React from "react";
import SubmitButton from "../components/auth/SubmitButton";

export default function EducationalBackgroundPage() {
  return (
    <form className="grid grid-cols-2 grow gap-x-4 gap-y-6">
      <SubmitButton isActive={false} label="Next" />
    </form>
  );
}
