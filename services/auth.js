import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { userDB } from '../db/user'
import {
  WrongCredentials,
  UserAlreadyExists,
  WeakPassword,
} from '../exceptions'
import { cookieOptions } from '../config/cookies'
import { strongPassword } from '../validation/strongPassword'

export const authService = {
  login: async ({ userName, password }) => {
    const user = await userDB.getByName(userName)
    if (!user) {
      throw new WrongCredentials()
    }
    // const validPassword = await compare(password, user.password)
    const validPassword = user.password == password
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
    if (!strongPassword(password)) {
      throw new WeakPassword()
    }
    let userData
    userData.userName = userName
    userData.password = await hash(password, 10)
    const result = await userDB.create(userData)
    return result
  },
}
