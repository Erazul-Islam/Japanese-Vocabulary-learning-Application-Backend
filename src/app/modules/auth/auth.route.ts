import express from 'express'
import { AuthValidation } from './auth.validation'
import { authController } from './auth.controller'
import validateRequest from '../middleware/validateRequest'

const router = express.Router()

router.post('/login', validateRequest(AuthValidation.loginValidationSchema), authController.loginUser)

export const authRoute = router