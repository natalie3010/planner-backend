import { clientController } from '../controllers'
import { Router } from 'express'

export const client = Router()

client.get('/', clientController.getAll())
client.post('/', clientController.create())
client.put('/:clientID', clientController.update())
client.delete('/:clientID', clientController.remove())
