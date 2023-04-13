import { Router } from 'express'
import { barchartController } from '../controllers'

export const barchart = Router()

barchart.get('/', barchartController.getAll)
