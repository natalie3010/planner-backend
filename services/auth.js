import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { userDB } from '../db/user'
import { UserAlreadyExists } from '../exceptions/userAlreadyExists'
import { WrongCredentials } from '../exceptions/wrongCredetianls'
import { cookieOptions } from '../config/cookies'

export const AuthService = {
  login: async ({ userName, password }) => {
    const user = await userDB.getByName(userName)
    if (!user) {
      throw new WrongCredentials()
    }
    const validPassword = await compare(password, user.password)
    if (!validPassword) {
      throw new WrongCredentials()
    }
    const expiresIn = 60 * 60 * 24 * 7
    const tokenData = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn,
    })
    const options = cookieOptions()
    return { tokenData, options, user }
  },

  register: async ({ userName, password }) => {
    const dbUser = await userDB.getByName(userName)
    if (dbUser) {
      throw new UserAlreadyExists(userName)
    }
    let userData
    userData.userName = userName
    userData.password = await hash(password, 10)
    const result = await userDB.create(userData)
    return result
  },
}
