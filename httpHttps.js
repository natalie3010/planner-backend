import dotenv from 'dotenv'
import https from 'https'
import fs from 'fs'

dotenv.config()

const PORT = process.env.PORT || 80

export const Http = (app) => {
  app.listen(PORT, () => {
    console.log(`Http server running at port ${PORT}/`)
  })
}

export const Https = (app) => {
  app.use((req, res, next) => {
    if (req.secure) {
      return next()
    }
    return res.redirect('https://' + req.headers.host + req.url)
  })

  const options = {
    key: fs.readFileSync(
      '/etc/letsencrypt/live/workforce-be.capdigiops.com/privkey.pem'
    ),
    cert: fs.readFileSync(
      '/etc/letsencrypt/live/workforce-be.capdigiops.com/fullchain.pem'
    ),
  }

  https.createServer(options, app).listen(443)
}
