import dotenv from 'dotenv'
import https from 'https'
import fs from 'fs'

dotenv.config()

const PORT = process.env.PORT || 3000

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
    key: env.PRIVKEY
      ? fs.readFileSync(env.PRIVKEY.replace(/\\n/gm, '\n'), 'utf8')
      : '',
    cert: env.CERT
      ? fs.readFileSync(env.CERT.replace(/\\n/gm, '\n'), 'utf8')
      : '',
  }

  https.createServer(options, app).listen(443)
}
