import { Router } from 'express'
import { supplyController } from '../controllers'

export const supply = Router()

supply.get('/', supplyController.getAll)
supply.get('/:id', supplyController.getOne)
supply.get('/skillID/:id', supplyController.getAllBySkill)
supply.post('/', supplyController.create)
supply.put('/:id', supplyController.update)
supply.delete('/:id', supplyController.remove)
