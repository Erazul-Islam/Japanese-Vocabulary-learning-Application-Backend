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
exports.tutorialController = void 0;
const catchAsync_1 = __importDefault(require("../../utiils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utiils/sendResponse"));
const tutorial_service_1 = require("./tutorial.service");
const AddingLession = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_service_1.tutorialService.addTutorial(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Tutorial added Successfully',
        data: result
    });
}));
const getAllLession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield tutorial_service_1.tutorialService.getAllTutorialFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Tutorial retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleTutorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TutorialId = req.params.tutorialId;
        const result = yield tutorial_service_1.tutorialService.deletedFromDB(TutorialId);
        res.status(200).json({
            success: true,
            message: "Tutorial deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.tutorialController = {
    AddingLession,
    getAllLession,
    deleteSingleTutorial
};
