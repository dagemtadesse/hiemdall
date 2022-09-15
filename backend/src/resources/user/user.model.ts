import mongoose, { Schema } from 'mongoose'
import { Material } from './../material/material.model'

export interface IUserInterface {
  firstName: String
  lastName: String
  set: String
  nationality: String
  birthDate: Date
  phoneNumber: String
  email: String
  password: String
  photoURL: String
}

const userSchema: Schema<IUserInterface> = new mongoose.Schema({
  firstName: {
    type: String,
    Required: true
  },

  lastName: {
    type: String,
    Required: true
  },

  birthDate: {
    type: Date,
    Required: false
  },

  phoneNumber: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },

  photoURL: {
    type: String,
    default:
      'https://res.cloudinary.com/digitallibrary/image/upload/v1662131476/defaults/profile_qrezuo.jpg',
    Required: false
  },
})

export const User = mongoose.model<IUserInterface>('User', userSchema)
