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
const AppError_1 = __importDefault(require("../../errors/AppError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const catchAsync_1 = __importDefault(require("../../utiils/catchAsync"));
const getValidation = () => {
    return (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.headers.authorization);
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(404, 'You have no token');
        }
        jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret, function (err, decoded) {
            if (err) {
                throw new AppError_1.default(404, 'Token is not varified');
            }
            return decoded;
        });
    }));
};
exports.default = getValidation;
