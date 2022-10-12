import dotenv from 'dotenv'
import { app } from './app'
import { skillDB } from './db'
import { Http, Https } from './httpHttps'

dotenv.config()

try {
  process.env.NODE_ENV === 'production' ? Https(app) : Http(app)
} catch (error) {
  console.log('Server boot error', { error })
}

// const data = async () => console.log(await skillDB.getOne(2))
// data()
