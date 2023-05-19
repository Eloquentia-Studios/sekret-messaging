import { z } from 'zod'
import { t } from '../services/trpc.js'

export const appRouter = t.router({
  hello: t.procedure.input(z.string()).query(({ input }) => {
    return { message: `Hello ${input}!` }
  })
})

export type AppRouter = typeof appRouter
