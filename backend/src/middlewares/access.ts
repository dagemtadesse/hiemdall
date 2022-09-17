import ac from '../roles'
import { User } from '../resources/user/user.model'
import { request } from 'http'
import { Permission } from 'accesscontrol'

export const grant_access = function (action, resource) {
  return async (req, res, next) => {
    const { _id } = res.locals
    try {
      const user = await User.findOne({ _id: _id })
      const permission = ac.can(user.role.toString())[action](resource)
      if (!permission.granted) {
        return res.status(403).json({
          statusCode: 403,
          message: "You don't have the nescessary permissions"
        })
      }
      next()
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message
      })
    }
  }
}
