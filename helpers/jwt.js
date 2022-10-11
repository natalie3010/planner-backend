import jwt from 'jsonwebtoken'

export const verifyToken = (token, decryptionKey) => {
  const decryptedDecryptionKey = Buffer.from(decryptionKey, 'base64').toString(
    'utf-8'
  )
  if (!token) {
    return null
  }
  try {
    return jwt.verify(token, decryptedDecryptionKey)
  } catch (err) {
    return null
  }
}

export const generateToken = (data, encryptionKey, expiresIn) => {
  const decryptedEncryptedKey = Buffer.from(encryptionKey, 'base64').toString(
    'utf-8'
  )
  return jwt.sign(data, decryptedEncryptedKey, {
    expiresIn: expiresIn,
  })
}
