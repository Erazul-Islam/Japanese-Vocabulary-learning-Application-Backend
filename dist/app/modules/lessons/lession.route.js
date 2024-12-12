"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessionRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const lession_validation_1 = require("./lession.validation");
const auth_1 = __importDefault(require("../middleware/auth"));
const user_constant_1 = require("../users/user.constant");
const lession_controller_1 = require("./lession.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(lession_validation_1.LessionValidation.LessionValidator), (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), lession_controller_1.lessionController.AddingLession);
router.put('/:lessionId', (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), lession_controller_1.lessionController.getUpdatedLession);
router.delete('/:lessionId', (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), lession_controller_1.lessionController.deleteSingleLession);
router.get('/', lession_controller_1.lessionController.getAllLession);
router.get('/:lessionId', lession_controller_1.lessionController.getSingleLession);
router.post('/:lessonId/add-vocabulary', (0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), lession_controller_1.lessionController.AddingVocabulary);
router.delete('/:lessonId/vocabulary/:vocabularyId', lession_controller_1.lessionController.deleteVocabularyController);
router.put('/:lessonId/vocabulary/:vocabularyId', lession_controller_1.lessionController.editVocabularyController);
exports.lessionRoute = router;
