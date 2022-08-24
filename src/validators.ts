import validator from "validator";

type ErrMsg = string | undefined;

export function emailValidator(val: string): ErrMsg {
    if (!validator.isEmpty(val) && !validator.isEmail(val)) {
        return "Please provide a valid Email address."
    }
}

export function phoneValidator(val: string): ErrMsg {
    if (validator.isEmpty(val, { ignore_whitespace: true })) {
        return `Please provide a Phone number.`;
    }

    if (!validator.isMobilePhone(val)) {
        return "Please provide a valid Phone number."
    }
}

export function DOBValidator(val: string): ErrMsg {
    if (validator.isEmpty(val, { ignore_whitespace: true })) {
        return `Please provide your date of birth`;
    }

    if (!validator.isDate(val)) {
        return "Please provide a valid date of birth."
    }
}

export function fullNameValidator(val: string): ErrMsg {
    if (validator.isEmpty(val, { ignore_whitespace: true })) {
        return 'Please provide your full name';
    }

    // if (!validator.isAlpha(val)) return 'Please provide a valid full name'
}

export default function notEmptyValidator(field: string): (val: string) => ErrMsg {
    return (val) => {
        if (validator.isEmpty(val, { ignore_whitespace: true })) {
            return `Please provide a valid ${field}.`;
        }
    }
}

export function passwordValidator(val: string): ErrMsg {
    if (!validator.isStrongPassword(val, { minUppercase: 0 }))
        return "The password must be atleast 8 characters and must contain atleast 1 number and 1 symbol";
}

export function confirmPasswordValidator(passwd: string, val: string,) {
    if (validator.isEmpty(val, { ignore_whitespace: true })) {
        return `Please confirm the previous password.`;
    }

    if (val != passwd) {
        return 'The two passwords doesn\'t match';
    }
}