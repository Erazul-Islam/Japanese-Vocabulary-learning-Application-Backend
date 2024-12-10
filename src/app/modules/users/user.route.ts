import express from 'express'
import validateRequest from '../middleware/validateRequest';
import { UserValidation } from './user.validation';
import { userController } from './user.controller';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidation.userValidationSchema),
    userController.signUpRegistration,
);

router.delete('/:userId', userController.deleteSingleUser)

router.get('/all-profile', userController.getAllProfile)

router.put('/:userId', userController.getUpdatedUserRoleAsAdmin)

router.patch('/:adminId', userController.getUpdatedUserRoleAsUser)

router.get('/me',  userController.getProfile)

router.put('/me',  userController.getUpdatedUser)

export const userRoute = router