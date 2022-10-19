import { Router } from 'express'
import { clientController } from '../controllers'

export const client = Router()

client.get('/', clientController.getAll)
client.get('/:id', clientController.getOne)
client.post('/', clientController.create)
client.put('/:id', clientController.update)
client.delete('/:id', clientController.remove)
