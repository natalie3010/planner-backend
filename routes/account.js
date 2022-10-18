import { accountController } from '../controllers'
import { Router } from 'express'

export const account = Router()

account.post('/login', accountController.login)
account.get('/logout', accountController.logout)
