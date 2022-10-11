import { skillController } from '../controllers'
import { Router } from 'express'

export const skill = Router()

skill.get('/', skillController.getAll())
