import dotenv from 'dotenv'

dotenv.config()

export const cookieOptions = () => {
  return {
    httpOnly: true,
    signed: true,
    sameSite: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
  }
}
