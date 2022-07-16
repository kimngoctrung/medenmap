"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const listuser_json_1 = __importDefault(require("../../listuser.json"));
const IEnum_1 = __importDefault(require("../../Model/Status/IEnum"));
const removeService = (id, res) => {
    try {
        const newListUser = listuser_json_1.default.filter((item) => {
            item.id != id;
        });
        fs_1.default.writeFileSync("./src/listuser.json", JSON.stringify([...newListUser]));
        res.status(IEnum_1.default.Success).send("Delete Successfull");
    }
    catch (err) {
        res.status(IEnum_1.default.ErrorSever).send(err);
    }
};
exports.default = removeService;
