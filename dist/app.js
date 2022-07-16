"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const rooter_router_1 = __importDefault(require("./routers/rooter.router"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const pathPublicDirectory = path_1.default.join(__dirname, "./public");
app.use("/public", express_1.default.static(pathPublicDirectory));
app.use(express_1.default.json());
dotenv_1.default.config({ path: "./src/config/.env" });
const port = process.env.port;
app.use("/v1", rooter_router_1.default);
app.listen(port, () => {
    console.log(`Application Listening at http://localhost:${port}`);
});
