import { HttpException } from './httpException'

export class WrongCredentials extends HttpException {
  constructor() {
    super(401, 'Wrong credentials provided')
  }
}
