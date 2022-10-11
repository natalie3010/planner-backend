import { Router } from 'express'
import { skill } from './skill'
import { client } from './client'
import { user } from './user'
import { supply } from './supply'
import { demand } from './demand'
import { authentication } from './authentication'

export const api = Router()

api.use('/account', authentication)
api.use('/skill', skill)
api.use('/client', client)
api.use('/user', user)
api.use('/supply', supply)
api.use('/demand', demand)
