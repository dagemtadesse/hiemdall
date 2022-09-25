import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../../resources/user/user.model'
import { generateOTP } from '../../helpers/otp'
import { sendMail } from '../../helpers/mail'
import { IOTPInterface, OTP } from '../../resources/OTP/otp.model'
import passwordComplexity from 'joi-password-complexity'
import Joi from 'joi'
import _, { isEmpty } from 'lodash'
import { encrypt } from '../../helpers/encryptPassword'
import { validatePassword, validatePhone } from '../../validators/validator'
import { PhoneResult } from 'phone'
export const signUpWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    email,
    phoneNumber,
    password,
    firstName,
    lastName,
    graduationYear,
    set,
    nationality,
    program
  } = req.body
  const emailExists = await User.findOne({ email })
  if (emailExists) {
    res.locals.json = {
      statusCode: 400,
      message: 'Email already exsists'
    }
    return next()
  }
  const user = {
    email,
    password,
    firstName,
    lastName,
    graduationYear,
    set,
    nationality,
    program
  }
  const result = validateInput(user)
  if (result.error) {
    res.locals.json = {
      statusCode: 400,
      message: result.error.details[0].message
    }
    return next()
  }
  try {
    const newUser = await createUser(
      email,
      password,
      firstName,
      lastName,
      graduationYear,
      set,
      nationality,
      program
    )
    res.locals.json = {
      statusCode: 201,
      data: newUser
    }
  } catch (error) {
    console.log('this is the thing')
    res.locals.json = {
      statusCode: 400,
      message: error.message
    }
  }
  return next()
}

export const signUpWithPhone = async (req, res) => {
  const {
    email,
    phoneNumber,
    password,
    firstName,
    lastName,
    graduationYear,
    set,
    nationality,
    program
  } = req.body
  const validate: PhoneResult = validatePhone(phoneNumber)
  if (validate.isValid == false) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Not valid phone number'
    })
  }
  const user = {
    email,
    phoneNumber,
    password,
    firstName,
    lastName,
    graduationYear,
    set,
    nationality,
    program
  }
  const inputValidation: Joi.ValidationResult<any> = validatePassword(user)
  if (inputValidation.error) {
    return res.status(400).json({
      statusCode: 400,
      message: inputValidation.error.details[0].message
    })
  }
  const userExists = await User.find({
    phoneNumber: phoneNumber
  })

  if (!isEmpty(userExists)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'User is already registerd'
    })
  }
  try {
    const hashedPassword = await encrypt(password)
    const OTPGenerated = generateOTP(6)
    const newUser = await User.create({
      phoneNumber,
      password: hashedPassword,
      firstName,
      lastName,
      graduationYear,
      set,
      nationality,
      program
    })
    const otp = await OTP.create({
      email: email,
      otpCode: OTPGenerated
    })
    const info = await sendMail({
      to: email,
      OTP: OTPGenerated,
      type: 'OTP'
    })
    return _.pick(newUser, ['phoneNumber', 'firstName', 'lastName'])
  } catch (error) {
    return error.message
  }
}

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('verifying email')
  const { email, otp } = req.body
  const checkUser = await User.findOne({ email: email })
  if (!checkUser) {
    res.locals.json = {
      statusCode: 400,
      message: 'Wrong verification code'
    }
    return next()
  }
  if (checkUser.isVerified) {
    res.locals.json = {
      statusCode: 400,
      message: 'User is already Verified'
    }
    return next()
  }
  const user = await validateUser(email, otp)
  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'Wrong verification code'
    }
    return next()
  }
  res.locals.json = {
    statusCode: 200,
    message: 'Account successfully verified'
  }
  return next()
}

function validateInput(user) {
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
    firstName: Joi.string().min(1).max(55).required(),
    lastName: Joi.string().min(1).max(55).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: passwordComplexity(complexityOptions, label) // This is not working
  })
  return schema.validate(user)
}
export const resendCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body
  const otp = await OTP.findOne({ email })
  if (!otp) {
    res.locals.json = {
      statusCode: 404,
      message: 'User not registered'
    }
    return next()
  }

  const newOtp = generateOTP(6)
  otp.otpCode = newOtp
  await otp.save()

  try {
    const info = await sendMail({
      to: email,
      OTP: newOtp,
      type: 'OTP'
    })
    res.locals.json = {
      statusCode: 200,
      message: 'New email verification code sent successfully'
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 400,
      message: 'Cannot resend verification code'
    }
    return next()
  }
}

const createUser = async (
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  graduationYear: Date,
  set: String,
  nationality: String,
  program: String
) => {
  const hashedPassword = await encrypt(password)
  const OTPGenerated = generateOTP(6)
  const newUser = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    graduationYear,
    set,
    nationality,
    program
  })
  const otp = await OTP.create({
    email: email,
    otpCode: OTPGenerated
  })
  try {
    const info = await sendMail({
      to: email,
      OTP: OTPGenerated,
      type: 'OTP'
    })
    return _.pick(newUser, ['email', 'firstName', 'lastName'])
  } catch (error) {
    return error
  }
}

const validateUser = async (email: String, otp: String) => {
  const user = await User.findOne({ email })
  if (!user) {
    return false
  }
  const userOtp = await OTP.findOne({ email })
  if (userOtp.otpCode !== otp) {
    return false
  }

  const updatedUser = await User.findByIdAndUpdate(user._id, {
    $set: { isVerified: true }
  })
  return updatedUser
}
