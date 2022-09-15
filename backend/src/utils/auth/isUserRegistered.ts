import { User } from '../../resources/user/user.model'

export async function isUserRegistered(req, res, next) {
  const options = ['no_account', 'already_verified']
  let response: any
  const email = req.body.email
  try {
    if (!email) throw Error('No email provided')
    const user = await User.findOne({ email: email })
    response = {
      statusCode: 200,
      data: {
        accountStatus: options[1]
      }
    }
    if (!user) {
      response.statusCode = 400
      response.data.accountStatus = options[0]
    }
  } catch (err: any) {
    response = {
      statusCode: 400,
      message: err.message
    }
  }
  res.locals.json = response
  return next()
}
