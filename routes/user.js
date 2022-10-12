import { userController } from '../controllers'
import { Router } from 'express'

export const user = Router()

user.get('/', userController.getAll)
user.get('/:id', userController.getOne)
user.post('/', userController.create)
user.put('/:id', userController.update)
user.delete('/:id', userController.remove)
