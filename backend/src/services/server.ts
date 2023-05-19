import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { appRouter } from '../routers/app.js'

export const createServer = async () => {
  const server = createHTTPServer({
    router: appRouter,
    createContext: () => {
      return {}
    }
  })

  return server
}
