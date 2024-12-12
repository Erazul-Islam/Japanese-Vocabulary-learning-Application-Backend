import express from 'express'
import { tutorialController } from './tutorial.controller';

const router = express.Router();


router.post('/',tutorialController.AddingLession)
router.get('/',tutorialController.getAllLession)
router.delete('/:tutorialId',tutorialController.deleteSingleTutorial)


export const tutorialRoute = router