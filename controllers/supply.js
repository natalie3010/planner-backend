import { supplyDB } from '../db'

export const supplyController = {
  getAll: async (_, res) => {
    const data = await supplyDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { id } = req.params

    const data = await supplyDB.getOne(id)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { supply } = req.body

    const data = await supplyDB.create(supply)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { id } = req.params
    const { supply } = req.body

    const data = await supplyDB.update(id, supply)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { id } = req.params

    const data = await supplyDB.remove(id)
    res.status(200).json(data)
  },
}
