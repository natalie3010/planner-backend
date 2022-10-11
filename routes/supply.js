import { Router } from 'express'
import { supplyController } from '../controllers'

export const supply = Router()

supply.get('/', supplyController.getAll)
supply.get('/:applicantID', supplyController.getOne)
supply.post('/', supplyController.create)
supply.put('/:applicantID', supplyController.update)
supply.delete('/:applicantID', supplyController.remove)
