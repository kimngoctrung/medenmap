"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPasswordMiddleware = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
//------------HASH PASSWORD
const hashPassword = (user) => {
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const hash = bcrypt_1.default.hashSync(user.password, salt);
    return hash;
};
const hashPasswordMiddleware = (user) => {
    const hash = hashPassword(user);
    user.password = hash;
};
exports.hashPasswordMiddleware = hashPasswordMiddleware;
