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
exports.vocabularyService = void 0;
const vocabulary_model_1 = require("./vocabulary.model");
// const addVocabulary = async (lessionId: string, word: string, pronunciation: string, whenToSay: string, lessionNo: number, token: string) => {
//     const decoded = jwt.verify(token, config.jwtAccessSecret as string)
//     if (typeof decoded === 'string' || !('email' in decoded)) {
//         throw new Error('Invalid token structure');
//     }
//     const finduser = await User.findOne({ email: decoded.email })
//     if (!finduser) {
//         throw new Error("User not found")
//     }
//     const newVocabulary: IVocabulary = {
//         userId: finduser._id.toString(),
//         userName: finduser.name,
//         adminEmail: finduser?.email,
//         word: word,
//         pronunciation: pronunciation,
//         whenToSay: whenToSay,
//         lessonNo: lessionNo,
//     }
//     const result = await lessionModel.findByIdAndUpdate(lessionId, { $push: { comments: newVocabulary } }, { new: true })
//     if (!result) {
//         throw new Error("Post not found");
//     }
//     return result
// }
const getAllVocabularyFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.vocabularyModel.find();
    return result;
});
const getUpdatedVocabularyFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield vocabulary_model_1.vocabularyModel.findOneAndUpdate({ _id: id }, payload, { new: true });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleVocabularyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield vocabulary_model_1.vocabularyModel.findOne({ _id: id });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.vocabularyModel.deleteOne({ _id: id });
    return result;
});
exports.vocabularyService = {
    // addVocabulary,
    getAllVocabularyFromDB,
    getUpdatedVocabularyFromDB,
    getSingleVocabularyFromDB,
    deletedFromDB
};
