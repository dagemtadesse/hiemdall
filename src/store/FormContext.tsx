import React, { createContext, useState } from "react";
import { JsxElement } from "typescript";

interface FormData {
  [key: string]: any;
}

export const FormContext = createContext({
  invalidFields: new Set(),
  data: {} as FormData,
  formCheckPoint: 1,
  addFields: (fields: string[]) => {},
  validateField: (target: string, isValid: boolean) => {},
  addData: (field: string, value: any) => {},
  nextForm: () => {},
});

export default function FormContextProvider({ children }: { children: any }) {
  const [invalidForms, setInvalidFroms] = useState(new Set());
  const [formPoint, setFormPoint] = useState(1);
  const [data, setData] = useState({} as FormData);

  return (
    <FormContext.Provider
      value={{
        invalidFields: invalidForms,
        data: data,
        formCheckPoint: formPoint,
        nextForm: () => setFormPoint((prev) => prev + 1),
        addFields(fields) {
          setInvalidFroms((prevFields) => {
            const newInvalidFields = new Set(prevFields);
            fields.forEach((field) => newInvalidFields.add(field));
            return newInvalidFields;
          });
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
