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
exports.lessionController = void 0;
const catchAsync_1 = __importDefault(require("../../utiils/catchAsync"));
const lession_service_1 = require("./lession.service");
const sendResponse_1 = __importDefault(require("../../utiils/sendResponse"));
const AddingLession = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lession_service_1.lessionService.addLession(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Lession added Successfully',
        data: result
    });
}));
const getAllLession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield lession_service_1.lessionService.getAllLessionFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Lessions retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleLession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lessionId = req.params.lessionId;
    try {
        const result = yield lession_service_1.lessionService.getSingleLessionFromDB(lessionId);
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Lession retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedLession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const LessionId = req.params.lessionId;
    console.log(LessionId);
    const updatedData = req.body;
    try {
        const updatedBike = yield lession_service_1.lessionService.getUpdatedLessionFromDB(LessionId, updatedData);
        res.status(200).json({
            success: true,
            message: "Lession updated successfully!",
            data: updatedBike
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleLession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const LessionId = req.params.lessionId;
        const result = yield lession_service_1.lessionService.deletedFromDB(LessionId);
        res.status(200).json({
            success: true,
            message: "Lession deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const AddingVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const lessonId = req.params.lessonId;
    console.log("lessonid", lessonId);
    const { vocabulary } = req.body;
    // console.log("vocabulary",vocabulary)
    const word = vocabulary[0].word;
    const pronunciation = vocabulary[0].pronunciation;
    const whenToSay = vocabulary[0].whenToSay;
    const lessonNo = vocabulary[0].lessonNo;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }
    const result = yield lession_service_1.lessionService.addVocabulary(lessonId, word, pronunciation, whenToSay, lessonNo, token);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Vocabulary added Successfully',
        data: result
    });
}));
const deleteVocabularyController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { lessonId, vocabularyId } = req.params;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }
    const updatedPost = yield lession_service_1.lessionService.DeleteVocabulary(lessonId, vocabularyId, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Vocabulary deleted successfully",
        data: updatedPost,
        statusCode: 200,
    });
}));
const editVocabularyController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { lessonId, vocabularyId } = req.params;
    const { vocabulary } = req.body;
    console.log(vocabulary);
    const word = vocabulary[0].word;
    const pronunciation = vocabulary[0].pronunciation;
    const whenToSay = vocabulary[0].whenToSay;
    const lessonNo = vocabulary[0].lessonNo;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }
    const updatedComment = yield lession_service_1.lessionService.EditVocabulary(lessonId, vocabularyId, word, pronunciation, whenToSay, lessonNo, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Vocabulary updated successfully",
        data: updatedComment,
        statusCode: 200,
    });
}));
exports.lessionController = {
    AddingLession,
    getAllLession,
    getUpdatedLession,
    deleteSingleLession,
    getSingleLession,
    AddingVocabulary,
    deleteVocabularyController,
    editVocabularyController
};
