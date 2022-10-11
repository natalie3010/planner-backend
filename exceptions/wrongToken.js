import { HttpException } from './httpException'

export class WrongToken extends HttpException {
  constructor() {
    super(401, 'Wrong authentication token')
  }
}
