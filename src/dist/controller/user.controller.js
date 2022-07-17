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
exports.userLogin = exports.getDetailUser = exports.getListUser = exports.deteleUser = exports.updateUser = exports.creatUser = void 0;
const User_1 = __importDefault(require("../service/User"));
const creatUser = (req, res) => {
    const user = req.body;
    const createId = Date.now();
    const id = createId.toString();
    const newUser = Object.assign(Object.assign({}, user), { id });
    User_1.default.createService(res, newUser);
};
exports.creatUser = creatUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    User_1.default.updateService(res, id, newUser);
};
exports.updateUser = updateUser;
const deteleUser = (req, res) => {
    const { id } = req.params;
    User_1.default.removeService(id, res);
};
exports.deteleUser = deteleUser;
const getListUser = (req, res) => {
    User_1.default.getListUserService(res);
};
exports.getListUser = getListUser;
const getDetailUser = (req, res) => {
    const { id } = req.params;
    User_1.default.getDetailService(res, id);
};
exports.getDetailUser = getDetailUser;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    User_1.default.loginService(res, user);
});
exports.userLogin = userLogin;
