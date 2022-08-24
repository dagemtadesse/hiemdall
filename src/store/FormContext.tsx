import React, { createContext, useState } from "react";
import { JsxElement } from "typescript";

interface FormData {
  [key: string]: any;
}

export const FormContext = createContext({
  invalidFields: new Set(),
  data: {} as FormData,
  addFields: (fields: string[]) => {},
  validateField: (target: string, isValid: boolean) => {},
  addData: (field: string, value: any) => {},
});

export default function FormContextProvider({ children }: { children: any }) {
  const [invalidForms, setInvalidFroms] = useState(new Set());
  const [data, setData] = useState({} as FormData);

  return (
    <FormContext.Provider
      value={{
        invalidFields: invalidForms,
        data: data,
        addFields(fields) {
          fields.forEach((field) => this.invalidFields.add(field));
        },
        addData(field, value) {
          setData((prevData) => {
            const newState = { ...prevData };
            newState[field] = value;
            return newState;
          });
        },
        validateField(target, isValid) {
          setInvalidFroms((prevState) => {
            let newState = new Set(prevState);
            if (isValid) {
              newState.delete(target);
            } else {
              newState.add(target);
            }
            return newState;
          });
        },
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
