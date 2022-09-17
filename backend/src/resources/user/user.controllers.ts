import { Request, Response, NextFunction } from 'express'
import { User, IUserInterface } from './user.model'
import JWT from 'jsonwebtoken'
import { OTP } from '../OTP/otp.model'
import { generateToken } from '../../helpers/generateToken'
import { v4 as uuidv4 } from 'uuid'
import { userInfo } from 'os'
import _, { range, toInteger } from 'lodash'
import { uploadImage } from '../../helpers/uploadImage'
import { grant_access } from '../../middlewares/access'

const selectionDict = {
  student: '-__v -password -role -deleted -isVerified',
  admin: '-__v -password -deleted -isVerified',
  superadmin: '-__v -password -deleted -isVerified'
}

const roleDict = {
  student: 1,
  admin: 2,
  superadmin: 3
}

export const fetchAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find({}).select('-__v -password -role')
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

    const { firstName, lastName, set, nationality, file } = req.body

    if (req.body.email || req.body.password || req.body.phoneNumber) {
      res.locals.json = {
        statusCode: 403,
        message: 'Forbidden action'
      }
      return next()
    }
    let user = await User.findByIdAndUpdate(_id, {
      $set: { firstName, lastName, set, nationality }
    })
    if (file) {
      const result = await uploadImage(file)
      if (result) {
        user.photoURL = result.data.secure_url
      }
    }
    await user.save()

    const updatedUser = await User.findById(_id).select('-__v -password -role')

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

export const promote = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { _id } = res.locals
    const { id } = req.params
    let user = await User.findByIdAndUpdate(id, {
      $set: { role: 'admin' }
    })
    await user.save()

    const updatedUser = await User.findById(id).select('-__v -password -role')

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

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals
  const { id } = req.params
  try {
    let user = await User.findByIdAndUpdate(id, {
      $set: { deleted: true }
    })
    await user.save()

    const otp = await OTP.deleteOne({ _id: id })
    res.locals.json = {
      statusCode: 200,
      message: 'Account successfully deleted'
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: error.message
    }
    return next()
  }
  return next()
}

export const deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals
  const user = await User.deleteOne({ _id: _id })
  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'Cannot Delete account'
    }
    return next()
  }

  const otp = await OTP.deleteOne({ _id: _id })
  res.locals.json = {
    statusCode: 200,
    message: 'Account successfully deleted'
  }
  return next()
}

export const updateAcademicStatus = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _id } = res.locals
    let user = await User.findByIdAndUpdate(_id, {
      level: { $inc: 1 }
    })
    await user.save()

    const updatedUser = await User.findById(_id).select('-__v -password -role')

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

export const isAdmin = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { _id } = res.locals
    const { id } = req.params

    const user = await User.findById(id)
    if (!user) {
      res.locals.json = {
        statusCode: 500,
        message: "User doesn't exist"
      }
      return next()
    }

    res.locals.json = {
      statusCode: 200,
      data: user.role == 'admin' || user.role == 'superadmin' ? true : false
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
