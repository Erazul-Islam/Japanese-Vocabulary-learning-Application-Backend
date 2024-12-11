import express from 'express'
import validateRequest from '../middleware/validateRequest';
import { UserValidation } from './user.validation';
import { userController } from './user.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post(
    '/signup',
    multerUpload.single('photo'),
    userController.signUpRegistration,
);

router.delete('/:userId', userController.deleteSingleUser)

router.get('/all-profile', userController.getAllProfile)

router.put('/:userId', userController.getUpdatedUserRoleAsAdmin)

router.patch('/:adminId', userController.getUpdatedUserRoleAsUser)

router.get('/me',  userController.getProfile)

router.put('/me',  userController.getUpdatedUser)

export const userRoute = router