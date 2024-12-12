"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabularyValidation = void 0;
const zod_1 = require("zod");
const VocabularyValidator = zod_1.z.object({
    word: zod_1.z.string().optional(),
    pronunciation: zod_1.z.string().optional(),
    whenToSay: zod_1.z.string().optional(),
    adminEmail: zod_1.z.string().optional(),
    lessonNo: zod_1.z.number().optional(),
});
exports.VocabularyValidation = {
    VocabularyValidator,
};
