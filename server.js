import dotenv from 'dotenv'
import { app } from './app'
import { Https } from './httpHttps'

dotenv.config()

try {
  Https(app)
} catch (error) {
  console.log('Server boot error', { error })
}
