import crypto from 'crypto'

export const generateKeys = async () => {
  return crypto.generateKeyPairSync('ec', {
    namedCurve: 'ed25519',
    publicKeyEncoding: {
      type: 'spki',
      format: 'der'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'der'
    }
  })
}

export const encrypt = async (publicKey: string, data: string) => {
  return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString('base64')
}

export const decrypt = async (privateKey: string, data: string) => {
  return crypto.privateDecrypt(privateKey, Buffer.from(data, 'base64')).toString()
}
