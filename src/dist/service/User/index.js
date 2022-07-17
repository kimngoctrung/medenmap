"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_service_1 = __importDefault(require("./create.service"));
const update_service_1 = __importDefault(require("./update.service"));
const get_detail_service_1 = __importDefault(require("./get-detail.service"));
const delete_service_1 = __importDefault(require("./delete.service"));
const login_service_1 = __importDefault(require("./login.service"));
const get_list_user_service_1 = __importDefault(require("./get-list-user.service"));
const userService = {
    createService: create_service_1.default,
    updateService: update_service_1.default,
    getDetailService: get_detail_service_1.default,
    removeService: delete_service_1.default,
    loginService: login_service_1.default,
    getListUserService: get_list_user_service_1.default,
};
exports.default = userService;
