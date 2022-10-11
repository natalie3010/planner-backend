import { Router } from 'express'
import { demandController } from '../controllers'

export const demand = Router()

demand.get('/', demandController.getAll)
demand.get('/:demandID', demandController.getOne)
demand.post('/', demandController.create)
demand.put('/:demandID', demandController.update)
demand.delete('/:demandID', demandController.remove)
