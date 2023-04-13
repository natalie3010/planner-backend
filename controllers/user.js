import { userDB } from '../db'

export const userController = {
  getAll: async (_, res) => {
    const data = await userDB.getAll()
    res.status(200).json(data)
  },
  getOne: async (req, res) => {
    const { id } = req.params

    const data = await userDB.getOne(id)
    res.status(200).json(data)
  },
  create: async (req, res) => {
    const { user } = req.body

    const data = await userDB.create(user)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { id } = req.params
    const { user } = req.body

    const data = await userDB.update(id, user)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { id } = req.params

    const data = await userDB.remove(id)
    res.status(200).json(data)
  },
}
