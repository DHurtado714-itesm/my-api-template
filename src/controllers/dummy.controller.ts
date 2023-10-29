import * as DummyService from '../services/dummy.service'
import { RequestHandler } from 'express'
import { Dummy } from '../models/dummy.model'
import { Request, Response } from 'express'

export const getGreeting: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const { name } = req.params
    const greeting = await DummyService.getGreeting(name)
    res.json({ greeting })
}

export const getAll: RequestHandler = async (req: Request, res: Response) => {
    const dummies: Dummy[] = await DummyService.getAll()
    res.json({ dummies })
}
