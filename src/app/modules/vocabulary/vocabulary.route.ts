import express from 'express'
import validateRequest from '../middleware/validateRequest';
import authValidation from '../middleware/auth';
import { USER_ROLE } from '../users/user.constant';
import { VocabularyValidation } from './vocabulary.validation';
import { vocabularyController } from './vocabulary.controller';



const router = express.Router();

router.post(
    '/',
    validateRequest(VocabularyValidation.VocabularyValidator), authValidation(USER_ROLE.ADMIN),
    vocabularyController.AddingVocabulary,
);
router.put('/:vocabularyId', authValidation(USER_ROLE.ADMIN), vocabularyController.getUpdatedVocabulary)
router.delete('/:vocabularyId',authValidation(USER_ROLE.ADMIN), vocabularyController.deleteSingleVocabulary)
router.get('/', vocabularyController.getAllVocabulary)
router.get('/:vocabularyId', vocabularyController.getSingleVocabulary)

export const vocabularyRoute = router