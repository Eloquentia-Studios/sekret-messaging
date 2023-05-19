import type { AppRouter } from './routers/app.js'
import { createServer } from './services/server.js'
export type { AppRouter }

const server = await createServer()
server.listen(8080)

console.log('Server listening on port 8080, hopefully...')
