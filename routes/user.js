import { userController } from '../controllers'
import { Router } from 'express'

export const user = Router()

user.post('/', userController.create())
