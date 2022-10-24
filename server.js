import dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

const PORT = process.env.PORT || 80

try {
  app.listen(PORT, () => {
    console.log(`Http server running at port ${PORT}/`)
  })
} catch (error) {
  console.log('Server boot error', { error })
}
