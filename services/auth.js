import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getUserRepository } from '../repository/user'
import { env } from '../utils/cleanEnv'
import { UserAlreadyExists } from '../exceptions/userAlreadyExists'
import { WrongCredentials } from '../exceptions/wrongCredetianls'
import { cookieOptions } from '../cookieConfig'

export const AuthService = {
  login: async (userData) => {
    const user = await getUserRepository.getByName(userData.userName)
    if (!user) {
      throw new WrongCredentials()
    }
    const validPassword = await compare(userData.password, user.password)
    if (!validPassword) {
      throw new WrongCredentials()
    }
    const expiresIn = 60 * 60 * 24 * 7
    const tokenData = sign({ id: user.id }, env.JWT_SECRET, { expiresIn })
    const options = cookieOptions()
    return { tokenData, options, user }
  },

  register: async (userData) => {
    const dbUser = await getUserRepository.getByName(userData.userName)
    if (dbUser) {
      throw new UserAlreadyExists(userData.userName)
    }
    userData.password = await hash(userData.password, 10)
    const result = await getUserRepository.create(
      userData.userName,
      userData.password,
      userData.role
    )
    return result
  },
}
