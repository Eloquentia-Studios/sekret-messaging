import { z } from 'zod'
import { t } from '../services/trpc.js'

export const appRouter = t.router({
  hello: t.procedure.input(z.string()).query((data) => {
    return { message: `Hello ${data}!` }
  })
})

export type AppRouter = typeof appRouter
