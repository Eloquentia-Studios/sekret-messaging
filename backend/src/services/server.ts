import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { appRouter } from '../routers/app.js'

export const createServer = async () => {
  const server = createHTTPServer({
    middleware: cors(),
    router: appRouter,
    createContext: () => {
      return {}
    }
  })

  return server
}
