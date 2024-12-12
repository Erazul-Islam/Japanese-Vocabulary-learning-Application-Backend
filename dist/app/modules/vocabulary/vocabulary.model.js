"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabularyModel = exports.JVocabularySchema = void 0;
const mongoose_1 = require("mongoose");
exports.JVocabularySchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true
    },
    pronunciation: {
        type: String,
        required: true
    },
    whenToSay: {
        type: String,
        required: true
    },
    lessonNo: {
        type: Number,
        required: true
    },
    adminEmail: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
exports.vocabularyModel = (0, mongoose_1.model)('JVocabulary', exports.JVocabularySchema);
