import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { api } from './routes'

dotenv.config()

const CORS_OPTIONS = {
  origin: ['http://localhost:4200'],
  credentials: true,
}

export const app = express()

app.use(cors(CORS_OPTIONS))
app.use(cookieParser(process.env.JWT_SECRET))
app.use(bodyParser.json())
app.use('/api/', api)
