import dotenv from 'dotenv'

dotenv.config()

export const cookieOptions = () => {
  return {
    httpOnly: true,
    signed: true,
    sameSite: 'None',
    secure: true,
  }
}
