import { HttpException } from './httpException'

export class AuthTokenMissing extends HttpException {
  constructor() {
    super(404, `Authorisation token is missing.`)
  }
}
