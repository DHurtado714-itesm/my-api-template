import DummyRouter from './dummy.routes'
import { Express } from 'express'

export const initRouter = (app: Express) => {
  app.use('/dummy', DummyRouter)
}