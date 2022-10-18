import { HttpException } from './httpException'

export class WeakPassword extends HttpException {
  constructor() {
    super(401, 'Password does not meet criteria!')
  }
}
