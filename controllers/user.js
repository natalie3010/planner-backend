import { userDB } from '../db'

export const userController = {
  getOne: async (user) => userDB.getOne(user),

  create: async (req, res) => {
    const { username, password, role } = req.body

    const data = await userDB.create(username, password, role)
    res.status(200).json(data)
  },
}
