"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabularyRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const user_constant_1 = require("../users/user.constant");
const vocabulary_controller_1 = require("./vocabulary.controller");
const router = express_1.default.Router();
// router.post(
//     '/:lessonId/add-vocabulary',
//      authValidation(USER_ROLE.ADMIN),
//     vocabularyController.AddingVocabulary,
// );
router.put('/:vocabularyId', (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), vocabulary_controller_1.vocabularyController.getUpdatedVocabulary);
router.delete('/:vocabularyId', (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), vocabulary_controller_1.vocabularyController.deleteSingleVocabulary);
router.get('/', vocabulary_controller_1.vocabularyController.getAllVocabulary);
router.get('/:vocabularyId', vocabulary_controller_1.vocabularyController.getSingleVocabulary);
exports.vocabularyRoute = router;
