import dotenv from 'dotenv'
import { app } from './app'

const PORT = process.env.PORT || 80

dotenv.config()

try {
  app.listen(PORT, () => {
    console.log(`Http server running at port ${PORT}/`)
  })
} catch (error) {
  console.log('Server boot error', { error })
}
