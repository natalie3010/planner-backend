import { Router } from 'express'
import { skill } from './skill'
import { client } from './client'
import { user } from './user'
import { supply } from './supply'
import { demand } from './demand'
import { barchart } from './barchart'
import { account } from './account'
import { authorised } from '../middleware/authorisation'

export const api = Router()

api.use('/skills', authorised(['SUPERUSER', 'ADMIN']), skill)
api.use('/clients', authorised(['SUPERUSER', 'ADMIN']), client)
api.use('/users', authorised(['SUPERUSER', 'ADMIN']), user)
api.use('/supply', authorised(['SUPERUSER', 'ADMIN']), supply)
api.use('/demand', authorised(['SUPERUSER', 'ADMIN']), demand)
api.use('/barchart', authorised(['SUPERUSER', 'ADMIN']), barchart)
api.use('/account', account)
