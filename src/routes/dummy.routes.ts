import express from 'express'
import * as controller from '../controllers/dummy.controller'

const router = express.Router()

router.get('/:name', controller.getGreeting)
router.get('/', controller.getAll)

export default router
