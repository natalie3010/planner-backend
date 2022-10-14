import { verify } from 'jsonwebtoken'
import { userDB } from '../db'
import { AuthTokenMissing, WrongToken, NotAuthorised } from '../exceptions'

export const authorised = (roles) => {
  return async (req, _, next) => {
    const token = req.signedCookies['access_token'] || ''

    if (token) {
      try {
        const { id } = verify(token, process.env.JWT_SECRET)
        const user = await userDB.getOne(id)

        if (user && !roles.length) {
          req.user = user
          return next()
        }
        if (user && roles.find((role) => user.role.indexOf(role) !== -1)) {
          req.user = user
          return next()
        }
        return next(new NotAuthorised())
      } catch (error) {
        next(new WrongToken())
      }
    }
    next(new AuthTokenMissing())
  }
}
