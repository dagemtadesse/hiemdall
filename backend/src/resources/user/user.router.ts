import { Router } from 'express'
import {
  deleteAll,
  deleteUser,
  fetchAllUsers,
  fetchUserByEmail,
  updateUser,
  fetchUserById
} from './user.controllers'
import { respond } from '../../middlewares/respond'
import { verifyToken } from '../../middlewares/verifyToken'
import { filterImage } from '../../middlewares/multer'

const userRouter = Router()
userRouter.get('/all', fetchAllUsers, respond)
userRouter.get('/:email', fetchUserByEmail, respond)
userRouter.post('/deleteAll', deleteAll, respond)
userRouter.delete('/:email', deleteUser, respond)
userRouter.put(
  '/',
  verifyToken,
  filterImage.single('image'),
  updateUser,
  respond
)
userRouter.get('/', verifyToken, fetchUserById, respond)
export = userRouter
