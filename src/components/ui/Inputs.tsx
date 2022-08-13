import React from "react";

type InputParam = {
    required: boolean,
    label: string,
    id: string
    type: string
    className?: string
}

const Input = ({className, required, label, id, type}: InputParam) => {
    const requiredLabel = required ? <span className="text-red-500">*</span> : null
    return (
        <div className={className || ""}>
            <label htmlFor={id} className="block text-gray-700 text-sm">{label} {requiredLabel}</label>
            <input type={type} id={id} className="border border-gray-400 rounded w-full py-2 mt-2"/>
        </div>
    );
}

export default Input;