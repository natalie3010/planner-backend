import { skillDB } from '../db'

export const skillController = {
  getAll: async (_, res) => {
    const data = skillDB.getAll()
    res.status(200).json(data)
  },
}
