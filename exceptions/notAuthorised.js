import { HttpException } from './httpException'

export class NotAuthorised extends HttpException {
  constructor() {
    super(401, 'Not authorised to take this action!')
  }
}
