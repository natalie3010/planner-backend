import { clientDB } from '../db'

export const clientController = {
  getAll: async (_, res) => {
    const data = await clientDB.getAll()
    res.status(200).json(data)
  },

  create: async (req, res) => {
    const { clientID, ClientName } = req.body

    const data = await clientDB.create(clientID, ClientName)
    res.status(200).json(data)
  },
  update: async (req, res) => {
    const { client } = req.body
    const { clientID } = req.params

    const data = await clientDB.update(clientID, client)
    res.status(200).json(data)
  },
  remove: async (req, res) => {
    const { clientID } = req.params
    const data = await clientDB.remove(clientID)
    res.status(200).json(data)
  },
}
