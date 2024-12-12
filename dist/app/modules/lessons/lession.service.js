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
exports.lessionService = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("../users/user.model");
const lession_model_1 = require("./lession.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const addLession = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lession_model_1.lessionModel.create(payload);
    return result;
});
const getAllLessionFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lession_model_1.lessionModel.find();
    return result;
});
const getUpdatedLessionFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield lession_model_1.lessionModel.findOneAndUpdate({ _id: id }, payload, { new: true });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleLessionFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield lession_model_1.lessionModel.findOne({ _id: id });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lession_model_1.lessionModel.deleteOne({ _id: id });
    return result;
});
const addVocabulary = (lessionId, word, pronunciation, whenToSay, lessionNo, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    if (!finduser) {
        throw new Error("User not found");
    }
    const newVocabulary = {
        userId: finduser._id.toString(),
        userName: finduser.name,
        adminEmail: finduser === null || finduser === void 0 ? void 0 : finduser.email,
        word: word,
        pronunciation: pronunciation,
        whenToSay: whenToSay,
        lessonNo: lessionNo,
    };
    const result = yield lession_model_1.lessionModel.findByIdAndUpdate(lessionId, { $push: { vocabulary: newVocabulary } }, { new: true });
    if (!result) {
        throw new Error("Post not found");
    }
    return result;
});
const DeleteVocabulary = (lessionId, vocabularyId, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const findUser = yield user_model_1.User.findOne({ email: decoded.email });
    if (!findUser) {
        throw new Error("User not found");
    }
    const result = yield lession_model_1.lessionModel.findOneAndUpdate({ _id: lessionId }, { $pull: { vocabulary: { _id: vocabularyId } } }, { new: true });
    if (!result) {
        throw new Error("Post not found or comment does not exist");
    }
    return result;
});
const EditVocabulary = (lessionId, vocabularyId, word, pronunciation, whenToSay, lessonNo, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    if (!finduser) {
        throw new Error("User not found");
    }
    const result = yield lession_model_1.lessionModel.findOneAndUpdate({ _id: lessionId, "vocabulary._id": vocabularyId }, {
        $set: {
            "vocabulary.$.word": word,
            "vocabulary.$.pronunciation": pronunciation,
            "vocabulary.$.whenToSay": whenToSay,
            "vocabulary.$.lessonNo": lessonNo
        }
    }, { new: true });
    if (!result) {
        throw new Error("Lesson or vocabulary not found");
    }
    return result;
});
exports.lessionService = {
    addLession,
    getAllLessionFromDB,
    getSingleLessionFromDB,
    getUpdatedLessionFromDB,
    deletedFromDB,
    addVocabulary,
    DeleteVocabulary,
    EditVocabulary
};
