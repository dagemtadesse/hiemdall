import { Request, Response, NextFunction } from 'express'

export const checkRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.email && !req.body.phoneNumber && !req.body.id) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Input either phone, email, or id to login'
    })
  }
  return next()
}
