import { Request, Response, NextFunction } from 'express'
import { User, IUserInterface } from './user.model'
import JWT from 'jsonwebtoken'
import { OTP } from '../OTP/otp.model'
import { generateToken } from '../../helpers/generateToken'
import { v4 as uuidv4 } from 'uuid'
import { userInfo } from 'os'
import _, { range, toInteger } from 'lodash'
import { uploadImage } from '../../helpers/uploadImage'
export const fetchAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find({})
  res.locals.json = {
    statusCode: 200,
    data: users
  }
  return next()
}

export const fetchUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals

  const user = await User.findById(_id)

  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'user not found'
    }
    return next()
  }

  res.locals.json = {
    statusCode: 200,
    data: _.pick(user, [
      '_id',
      'email',
      'firstName',
      'lastName',
      'phoneNumber',
      'birthDate',
      'photoURL'
    ])
  }
  return next()
}
export const fetchUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.params
  const user = await User.findOne({ email })
  if (!user) {
    res.locals.json = {
      statusCode: 404,
      message: "A user with the given email doesn't exist"
    }
    return next()
  }
  res.locals.json = {
    statusCode: 200,
    data: user
  }
  return next()
}

export const updateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _id } = res.locals

    if (req.body.email || req.body.password || req.body.phoneNumber) {
      res.locals.json = {
        statusCode: 403,
        message: 'Forbidden action'
      }
      return next()
    }
    let user = await User.findByIdAndUpdate(_id, {
      $set: req.body
    })
    if (req.file) {
      const result = await uploadImage(req.file)
      if (result) {
        user.photoURL = result.data.secure_url
      }
    }
    await user.save()

    const updatedUser = await User.findById(_id).select('-__v -password')

    res.locals.json = {
      statusCode: 200,
      data: updatedUser
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: error.message
    }
    return next()
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.params
  const user = await User.deleteOne({ email })
  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'Cannot remove account'
    }
    return next()
  }

  const otp = await OTP.deleteOne({ email })
  res.locals.json = {
    statusCode: 200,
    message: 'Account successfully deleted'
  }
  return next()
}

export const deleteAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.deleteMany({})
    await OTP.deleteMany({})
    console.log('del')
    res.locals.json = {
      statusCode: 200,
      message: 'All accounts deleted'
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 400,
      message: 'Cannot delete all accounts'
    }
    return next()
  }
}
