import { Router } from 'express'
import { demandController } from '../controllers'

export const demand = Router()

demand.get('/', demandController.getAll)
demand.get('/:id', demandController.getOne)
demand.post('/', demandController.create)
demand.put('/:id', demandController.update)
demand.delete('/:id', demandController.remove)
