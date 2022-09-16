import mongoose, { Schema } from 'mongoose'

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
  isVerified: Boolean
}

const userSchema: Schema<IUserInterface> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },
    set: {
      type: String,
      default: 'true'
    },
    nationality: {
      type: String,
      default: 'Ethiopian'
    },
    birthDate: {
      type: Date,
      required: false
    },

    phoneNumber: {
      type: String,
      required: false
    },

    email: {
      type: String,
      required: false
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
      required: false
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {}
)

export const User = mongoose.model<IUserInterface>('User', userSchema)
