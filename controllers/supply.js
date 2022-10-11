import { supplyDB } from '../db'

export const supplyController = {
  getAll: async (_, res) => {
    const data = await supplyDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { applicantID } = req.params

    const data = await supplyDB.getOne(applicantID)
    res.status(200).json(data)
  },
  getOneBySkill: async (req, res) => {
    const { selectedSkillsID } = req.body

    const data = await supplyDB.getOneBySkill(selectedSkillsID)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { supply } = req.body
    const data = await supplyDB.create(supply)
  },
  update: async (req, res) => {
    const { supply } = req.body
    const { supplyID } = req.params

    const data = await supplyDB.update(applicantID, supply)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { supplyID } = req.body
    const data = await supplyDB.remove(supplyID)
    res.status(200).json(data)
  },
}
