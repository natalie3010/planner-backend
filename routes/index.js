import { Router } from 'express'
import { skill } from './skill'
import { client } from './client'
import { user } from './user'
import { supply } from './supply'
import { demand } from './demand'
// import { authentication } from './authentication'
import { Authorised } from './middleware/authorisation'

export const api = Router()

// api.use('/account', authentication)
api.use('/skills', Authorised(['SUPERUSER', 'ADMIN']), skill)
// api.use('/skill', skill)
api.use('/clients', client)
api.use('/users', user)
api.use('/supply', supply)
api.use('/demand', demand)
