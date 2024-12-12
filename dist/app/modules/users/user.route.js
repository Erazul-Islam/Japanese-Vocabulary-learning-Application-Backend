"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
router.post('/signup', multer_config_1.multerUpload.single('photo'), user_controller_1.userController.signUpRegistration);
router.delete('/:userId', user_controller_1.userController.deleteSingleUser);
router.get('/all-profile', user_controller_1.userController.getAllProfile);
router.put('/:userId', user_controller_1.userController.getUpdatedUserRoleAsAdmin);
router.patch('/:adminId', user_controller_1.userController.getUpdatedUserRoleAsUser);
router.get('/me', user_controller_1.userController.getProfile);
router.put('/me', user_controller_1.userController.getUpdatedUser);
exports.userRoute = router;
