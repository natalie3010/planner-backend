import { Router } from 'express'
import { skill } from './skill'
import { client } from './client'
import { user } from './user'
import { supply } from './supply'
import { demand } from './demand'
import { authorised } from './middleware/authorisation'

export const api = Router()

// api.use('/skills', authorised(['SUPERUSER', 'ADMIN']), skill)
api.use('/skills', skill)
api.use('/clients', client)
api.use('/users', user)
api.use('/supply', supply)
api.use('/demand', demand)
