"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const IEnum_1 = __importDefault(require("../../Model/Status/IEnum"));
const Message_1 = require("../../Model/Status/Message");
const getListUserService = (res) => {
    try {
        const databaseReadFile = fs_1.default.readFileSync("./src/listuser.json", "utf8");
        const newDatabase = [];
        const data = JSON.parse(databaseReadFile);
        data.map((item) => {
            const newItem = Object.assign(Object.assign({}, item), { password: "" });
            return newDatabase.push(newItem);
        });
        res.status(IEnum_1.default.Success).send({ messageApi: Message_1.messageApi, data: newDatabase });
    }
    catch (err) {
        res.status(IEnum_1.default.ErrorSever).send(err);
    }
};
exports.default = getListUserService;
