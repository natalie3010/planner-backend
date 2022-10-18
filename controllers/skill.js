import { skillDB } from '../db'

export const skillController = {
  getAll: async (_, res) => {
    const data = await skillDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { id } = req.params

    const data = await skillDB.getOne(id)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { skill } = req.body

    const data = await skillDB.create(skill)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { id } = req.params
    const { skill } = req.body

    const data = await skillDB.update(id, skill)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { id } = req.params

    const data = await skillDB.remove(id)
    res.status(200).json(data)
  },
}
