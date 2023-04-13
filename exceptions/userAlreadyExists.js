import { HttpException } from './httpException'

export class UserAlreadyExists extends HttpException {
  constructor(userName) {
    super(400, `User with user name ${userName} already exists`)
  }
}
