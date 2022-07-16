import express, { Router } from "express";
import path from "path";
import rootRouter from "./routers/rooter.router";
import dotenv from "dotenv";
const app = express();
const pathPublicDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(pathPublicDirectory));
app.use(express.json());
dotenv.config({ path: "./src/config/.env" });
const port = process.env.port;
app.use("/v1", rootRouter);
app.listen(port, () => {
  console.log(`Application Listening at http://localhost:${port}`);
});
