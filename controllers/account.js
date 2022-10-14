import { userDB } from '../db'
import { authService } from '../services/auth'

export const accountController = {
  login: async (req, res) => {
    const userData = req.body
    const { tokenData, options, user } = await authService.login(userData)
    res.cookie('access_token', tokenData, options)
    res.status(200).json(user)
  },
  logout: async (_, res) => {
    res.clearCookie('access_token')
    res.status(204).json({ message: 'ok' })
  },
}
