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
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabularyController = void 0;
const vocabulary_service_1 = require("./vocabulary.service");
// const AddingVocabulary = catchAsync(async (req: Request, res: Response) => {
//     const { lessonId } = req.params
//     const { vocabulary } = req.body
//     const word = vocabulary[0].word
//     const pronunciation = vocabulary[1].pronunciation
//     const whenToSay = vocabulary[2].whenToSay
//     const lessonNo = vocabulary[3].lessonNo
//     const token = req.headers.authorization?.split(" ")[1]
//     if (!token) {
//         return sendResponse(res, {
//             success: false,
//             status: 401,
//             message: "Unauthorized",
//             data: null,
//             statusCode: 401,
//         });
//     }
//     const result = await vocabularyService.addVocabulary(lessonId, word,pronunciation,whenToSay,lessonNo, token as string);
//     sendResponse(res, {
//         statusCode: 200,
//         status: 200,
//         success: true,
//         message: 'Vocabulary added Successfully',
//         data: result
//     })
// })
const getAllVocabulary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield vocabulary_service_1.vocabularyService.getAllVocabularyFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Vocabulary retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleVocabulary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vocabularyId = req.params.vocabularyId;
    try {
        const result = yield vocabulary_service_1.vocabularyService.getSingleVocabularyFromDB(vocabularyId);
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Vocabulary retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedVocabulary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vocabularyId = req.params.vocabularyId;
    const updatedData = req.body;
    try {
        const updatedBike = yield vocabulary_service_1.vocabularyService.getUpdatedVocabularyFromDB(vocabularyId, updatedData);
        res.status(200).json({
            success: true,
            message: "Vocabulary updated successfully!",
            data: updatedBike
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleVocabulary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vocabularyId = req.params.vocabularyId;
        const result = yield vocabulary_service_1.vocabularyService.deletedFromDB(vocabularyId);
        res.status(200).json({
            success: true,
            message: "Vocabulary deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.vocabularyController = {
    // AddingVocabulary,
    getAllVocabulary,
    getUpdatedVocabulary,
    deleteSingleVocabulary,
    getSingleVocabulary,
};
