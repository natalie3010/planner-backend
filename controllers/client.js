import { clientDB } from '../db'

export const clientController = {
  getAll: async (_, res) => {
    const data = await clientDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { id } = req.params

    const data = await demandDB.getOne(id)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { client } = req.body

    const data = await clientDB.create(client)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { id } = req.params
    const { client } = req.body

    const data = await clientDB.update(id, client)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { id } = req.params

    const data = await clientDB.remove(id)
    res.status(200).json(data)
  },
}
