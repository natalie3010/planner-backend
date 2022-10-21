import dotenv from 'dotenv'
import { app } from './app'
import { Http, Https } from './httpHttps'

dotenv.config()

try {
  Http(app)
  Https(app)
} catch (error) {
  console.log('Server boot error', { error })
}
