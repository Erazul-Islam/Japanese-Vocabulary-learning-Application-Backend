"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessionValidation = void 0;
const zod_1 = require("zod");
const LessionValidator = zod_1.z.object({
    LessionName: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    LessionNumber: zod_1.z.number().optional(),
});
exports.LessionValidation = {
    LessionValidator,
};
