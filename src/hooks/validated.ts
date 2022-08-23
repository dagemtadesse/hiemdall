import React, { useEffect, useState } from "react";

const useValidated = (blured: boolean, validator: (val: string) => string | undefined) => {
    const [error, setError] = useState<string>()
    const [value, setValue] = useState<string>('')

    const validatorFn = (value: string) => {
        console.log('called')
        setError(validator(value))
    }

    useEffect(() => {
        if (blured)
            setError(validator(value))
    }, [blured])

    return { value, setValue, error, validatorFn };
}

export default useValidated;