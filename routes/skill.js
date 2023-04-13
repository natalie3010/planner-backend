import { Router } from 'express'
import { skillController } from '../controllers'

export const skill = Router()

skill.get('/', skillController.getAll)
skill.get('/:id', skillController.getOne)
skill.post('/', skillController.create)
skill.put('/:id', skillController.update)
skill.delete('/:id', skillController.remove)
