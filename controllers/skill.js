import { skillDB } from '../db'

export const skillController = {
  getAll: async (_, res) => {
    const data = await skillDB.getAll()
    res.status(200).json(data)
  },
}
