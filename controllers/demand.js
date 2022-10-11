import { demandDB } from '../db'

export const demandController = {
  getAll: async (_, res) => {
    const data = await demandDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { demandID } = req.params

    const data = await demandDB.getOne(demandID)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { demand } = req.body

    const data = await demandDB.create(demand)
    res.status(200).json(data)
  },

  update: async (req, res) => {
    const { demand } = req.body
    const { demandID } = req.params

    const data = await demandDB.update(demandID, demand)
    res.status(200).json(data)
  },

  remove: async (req, res) => {
    const { demandID } = req.params

    const data = demandDB.remove(demandID)
    res.status(200).json(data)
  },
}
