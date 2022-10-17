import { demandDB } from '../db'

export const demandController = {
  getAll: async (_, res) => {
    const data = await demandDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { id } = req.params

    const data = await demandDB.getOne(id)
    res.status(200).json(data)
  },
  getAllBySkill: async (req, res) => {
    const { id } = req.params

    const data = await demandDB.getAllBySkill(id)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { demand } = req.body

    const data = await demandDB.create(demand)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { id } = req.params
    const { demand } = req.body

    const data = await demandDB.update(id, demand)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { id } = req.params

    const data = demandDB.remove(id)
    res.status(200).json(data)
  },
}
