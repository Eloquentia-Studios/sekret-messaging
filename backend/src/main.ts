import { createServer } from './services/server.js'

const server = await createServer()
server.listen(8080)

console.log('Server listening on port 8080, hopefully...')
