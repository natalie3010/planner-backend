import { HttpException } from './httpException'

export class ResourceNotFound extends HttpException {
  constructor(id) {
    super(404, `Resource with id ${id} not found`)
  }
}
