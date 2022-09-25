import express from 'express'
import {
  verifyEmail,
  resendCode,
  signUpWithEmail,
  signUpWithPhone
} from './signup'
import { signinWithEmail } from './signin'
import { signinWithPhone } from './signin'
import { forgotPassword, forgotPasswordWithPhone } from './forgotPassword'
import { respond } from '../../middlewares/respond'
import { verifyToken } from '../../middlewares/verifyToken'
import { changePassword } from './changePassword'
import { checkRequest } from '../../middlewares/checkRequest'
const authRouter = express.Router()

authRouter.post('/signup-with-email', signUpWithEmail, respond)
authRouter.post('/verify', verifyEmail, respond)
authRouter.post('/resendCode', resendCode, respond)
authRouter.post(
  '/login',
  checkRequest,
  signinWithEmail,
  signinWithPhone,
  respond
)
authRouter.post('/signup-with-phone', signUpWithPhone, respond)
authRouter.post(
  '/forgotPassword',

  checkRequest,
  forgotPassword,
  forgotPasswordWithPhone,
  respond
)
authRouter.put('/changePassword', verifyToken, changePassword, respond)

export default authRouter
