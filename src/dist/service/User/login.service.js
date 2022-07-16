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
const bcrypt_1 = __importDefault(require("bcrypt"));
const listuser_json_1 = __importDefault(require("../../listuser.json"));
const IEnum_1 = __importDefault(require("../../Model/Status/IEnum"));
const Message_1 = require("../../Model/Status/Message");
const loginService = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const index = listuser_json_1.default.findIndex((item) => {
            return item.userEmail === user.userEmail;
        });
        const match = yield bcrypt_1.default.compare(user.password, listuser_json_1.default[index].password);
        if (match) {
            res
                .status(IEnum_1.default.Success)
                .send({ messageApi: Message_1.messageApi, data: Object.assign(Object.assign({}, listuser_json_1.default[index]), { password: "" }) });
        }
        else {
            res.status(IEnum_1.default.ErrorSever).send("Email or Password Is Invalid");
        }
    }
    catch (err) {
        res.status(IEnum_1.default.ErrorSever).send(err);
    }
});
exports.default = loginService;
