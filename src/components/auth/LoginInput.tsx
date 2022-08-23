import classNames from "classnames";
import React, { useState } from "react";

type LoginInputProps = {
  type: string;
  label: string;
  error?: string;
  value: string;
  id: string;
  setValue: (val: string) => void;
  setBlured: (val: boolean) => void;
};

const LoginInput = ({
  type,
  label,
  value,
  setValue,
  error,
  id,
  setBlured,
}: LoginInputProps) => {
  const inputStyle = classNames({
    "border rounded-md w-full py-2 px-3": true,
    "border-gray-400": !error,
    "border-red-800 outline-red-800": !!error,
  });
  return (
    <div className="mt-8">
      <label htmlFor={id} className="block text-gray-700 text-md mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={inputStyle}
        onBlur={() => setBlured(true)}
        onFocus={() => setBlured(false)}
      />
      {error && <p className="text-red-600 text-sm py-1 px-3">{error}</p>}
    </div>
  );
};

export default LoginInput;
