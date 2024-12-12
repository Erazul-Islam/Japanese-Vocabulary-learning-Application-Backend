"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialModel = void 0;
const mongoose_1 = require("mongoose");
const JTutorialSchema = new mongoose_1.Schema({
    Link: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
exports.tutorialModel = (0, mongoose_1.model)('tutorialModel', JTutorialSchema);
