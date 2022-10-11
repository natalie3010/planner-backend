import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import api from './routes'

dotenv.config()

const PORT = process.env.PORT || 3000
const CORS_OPTIONS = {
  origin: ['http://localhost:4200'],
}

const app = express()

app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json())
app.use('/api/', api)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
