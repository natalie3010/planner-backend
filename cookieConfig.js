import dotenv from 'dotenv'

dotenv.config()

export const cookieOptions = () => {
  return {
    httpOnly: true,
    signed: true,
    sameSite: env.isProduction,
    secure: env.isProduction,
  }
}
