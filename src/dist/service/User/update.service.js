"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const listuser_json_1 = __importDefault(require("../../listuser.json"));
const IEnum_1 = __importDefault(require("../../Model/Status/IEnum"));
const Message_1 = require("../../Model/Status/Message");
const updateService = (res, id, newUser) => {
    try {
        const index = listuser_json_1.default.findIndex((item) => {
            return item.id === id;
        });
        if (index < 0) {
            return res.status(404).send("User Not Found");
        }
        const userUpdate = Object.assign(Object.assign({}, listuser_json_1.default[index]), newUser);
        fs_1.default.writeFileSync("./src/listuser.json", JSON.stringify([...listuser_json_1.default]));
        res.status(IEnum_1.default.Success).send({
            messageApi: Message_1.messageApi,
            data: Object.assign(Object.assign({}, userUpdate), { pasword: "" }),
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = updateService;
