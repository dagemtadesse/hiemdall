import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'

const phone = require('phone')
export const validatePhone = (userPhoneNum) => {
  return phone.phone(userPhoneNum)
}

export const validatePassword = (passwrd) => {
  const complexityOptions = {
    min: 8,
    max: 30,
    lowercase: 1,
    uppercase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3
  }

  const label = 'Password'
  const schema = Joi.object({
    password: passwordComplexity(complexityOptions, label) // This is not working
  })
  return schema.validate(passwrd)
}
