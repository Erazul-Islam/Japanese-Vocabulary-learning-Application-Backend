"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../utiils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utiils/sendResponse"));
const user_service_1 = require("./user.service");
const signUpRegistration = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield user_service_1.userService.signUp(Object.assign(Object.assign({}, JSON.parse(req.body.data)), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path }));
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        status: 201,
        success: true,
        message: 'User Registration Successfully',
        data: result
    });
}));
const getAllProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.user);
    try {
        const result = yield user_service_1.userService.getAllProfileFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Profile retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedUserRoleAsAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const updatedUserRole = yield user_service_1.userService.getUpdatedUserRoleIntoAdmin(userId);
        res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: updatedUserRole,
        });
    }
    catch (err) {
        next(err);
        console.log(err);
    }
});
const getUpdatedUserRoleAsUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.adminId;
    try {
        const updatedUserRole = yield user_service_1.userService.getUpdatedUserRoleIntoUser(userId);
        res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: updatedUserRole,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const result = yield user_service_1.userService.getMyProfile(token);
        res.status(200).json({
            success: true,
            message: "User profile retrived successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const updatedData = req.body;
    try {
        const updatedUser = yield user_service_1.userService.getUpdatedUser(token, updatedData);
        console.log(updatedUser);
        res.status(200).json({
            success: true,
            message: "user updated successfully!",
            data: updatedUser
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const result = yield user_service_1.userService.deletedFromDB(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.userController = {
    signUpRegistration,
    getProfile,
    getUpdatedUser,
    getAllProfile,
    deleteSingleUser,
    getUpdatedUserRoleAsAdmin,
    getUpdatedUserRoleAsUser
};