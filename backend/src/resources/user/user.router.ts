import { Router } from 'express'
import {
  deleteAccount,
  removeUser,
  fetchAllUsers,
  fetchUserByEmail,
  updateUser,
  fetchUserById
} from './user.controllers'
import { respond } from '../../middlewares/respond'
import { verifyToken } from '../../middlewares/verifyToken'
import { filterImage } from '../../middlewares/multer'
import { grant_access } from '../../middlewares/access'

const userRouter = Router()
userRouter.get(
  '/all',
  verifyToken,
  grant_access('readAny', 'profile'),
  fetchAllUsers,
  respond
)
userRouter.get('/:email', verifyToken, fetchUserByEmail, respond)
userRouter.delete(
  '/',
  verifyToken,
  grant_access('deleteOwn', 'profile'),
  deleteAccount,
  respond
)
userRouter.delete('/:email', verifyToken, removeUser, respond)
userRouter.patch(
  '/',
  verifyToken,
  grant_access('updateOwn', 'profile'),
  filterImage.single('image'),
  updateUser,
  respond
)
userRouter.get(
  '/',
  verifyToken,
  grant_access('readOwn', 'profile'),
  fetchUserById,
  respond
)
export = userRouter
