"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessionModel = void 0;
const mongoose_1 = require("mongoose");
const vocabulary_model_1 = require("../vocabulary/vocabulary.model");
const JLessionSchema = new mongoose_1.Schema({
    LessionName: {
        type: String,
        required: true
    },
    LessionNumber: {
        type: Number,
        required: true
    },
    vocabularyCount: {
        type: Number,
        default: 0
    },
    vocabulary: [vocabulary_model_1.JVocabularySchema]
}, {
    timestamps: true,
});
exports.lessionModel = (0, mongoose_1.model)('JLession', JLessionSchema);
