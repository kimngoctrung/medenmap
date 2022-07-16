"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controller/user.controller");
const user_middleware_1 = require("../../middleware/UserMiddleware/user.middleware");
const userRouter = express_1.default.Router();
userRouter.post("/", (req, res, next) => {
    const user = req.body;
    (0, user_middleware_1.hashPasswordMiddleware)(user);
    next();
}, user_controller_1.creatUser);
userRouter.put("/:id", (req, res, next) => {
    const user = req.body;
    (0, user_middleware_1.hashPasswordMiddleware)(user);
    next();
}, user_controller_1.updateUser);
userRouter.delete("/:id", user_controller_1.deteleUser);
userRouter.get("/:id", user_controller_1.getDetailUser);
userRouter.get("/", user_controller_1.getListUser);
userRouter.post("/sign-in", user_controller_1.userLogin);
exports.default = userRouter;
