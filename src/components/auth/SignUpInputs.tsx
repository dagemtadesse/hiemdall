import classNames from "classnames";
import React, { useContext, useEffect, useRef, useState } from "react";
import WarningIcon from "../../assets/WarningIcons";
import { FormContext } from "../../store/FormContext";

type InputParam = {
  required: boolean;
  label: string;
  type: string;
  className?: string;
  validator: (val: string) => string | undefined;
  field: string;
};

const SignUpInput = ({
  className,
  required,
  label,
  type,
  validator,
  field,
}: InputParam) => {
  const ref = useRef<HTMLInputElement>(null);
  const ctx = useContext(FormContext);

  const [isBlurred, setIsBlurred] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const inputStyle = classNames({
    "border rounded w-full py-2 px-3 mt-2": true,
    "border-gray-400": !error,
    "border-red-800 outline-red-800": !!error,
  });

  useEffect(() => {
    if (isBlurred && ref.current) {
      const value = ref.current.value;
      ctx.addData(field, value);

      const error = validator(value);
      setError(error);
      ctx.validateField(field, !error);
    }
  }, [isBlurred]);

  return (
    <div className={className || ""}>
      <label htmlFor={field} className="block text-gray-700 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        id={field}
        ref={ref}
        className={inputStyle}
        onBlur={() => setIsBlurred(true)}
        onFocus={() => setIsBlurred(false)}
      />

      {error && (
        <p className="text-red-600 text-sm py-1 px-3 flex gap-3">
          <WarningIcon /> {error}
        </p>
      )}
    </div>
  );
};

export default SignUpInput;
