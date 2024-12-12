import express from 'express'
import validateRequest from '../middleware/validateRequest';
import { LessionValidation } from './lession.validation';
import authValidation from '../middleware/auth';
import { USER_ROLE } from '../users/user.constant';
import { lessionController } from './lession.controller';


const router = express.Router();

router.post(
    '/',
    validateRequest(LessionValidation.LessionValidator), authValidation(USER_ROLE.ADMIN), 
    lessionController.AddingLession,
);
router.put('/:lessionId', authValidation(USER_ROLE.ADMIN), lessionController.getUpdatedLession)
router.delete('/:lessionId',authValidation(USER_ROLE.ADMIN), lessionController.deleteSingleLession)
router.get('/', lessionController.getAllLession)
router.get('/:lessionId', lessionController.getSingleLession)
router.post(
    '/:lessonId/add-vocabulary',
     authValidation(USER_ROLE.ADMIN),
    lessionController.AddingVocabulary,
);

router.delete('/:lessonId/vocabulary/:vocabularyId', lessionController.deleteVocabularyController)
router.put('/:lessonId/vocabulary/:vocabularyId', lessionController.editVocabularyController)
export const lessionRoute = router