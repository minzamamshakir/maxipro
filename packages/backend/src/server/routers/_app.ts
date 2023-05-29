/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc'
import { sessionRouter } from './session'
import { tokenRouter } from './token'

export const appRouter = router({
  health: publicProcedure.query(() => 'yay!'),
  session: sessionRouter,
  token: tokenRouter,
})

export type AppRouter = typeof appRouter
