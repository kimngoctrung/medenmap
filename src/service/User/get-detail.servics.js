"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IEnum_1 = __importDefault(require("../../Model/Status/IEnum"));
const listuser_json_1 = __importDefault(require("../../listuser.json"));
const Message_1 = require("../../Model/Status/Message");
const getDetailService = (res, id) => {
    try {
        const userDetail = listuser_json_1.default.find((item) => {
            return item.id === id;
        });
        res.status(IEnum_1.default.Success).send({ messageApi: Message_1.messageApi, data: userDetail });
    }
    catch (err) {
        res.status(IEnum_1.default.ErrorSever).send(err);
    }
};
exports.default = getDetailService;
