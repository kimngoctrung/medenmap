import express, { Router } from "express";
import path from "path";
import rootRouter from "./routers/rooter.router";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
const pathPublicDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(pathPublicDirectory));
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./src/config/.env" });
const PORT = process.env.PORT || 5000;
app.use("/v1", rootRouter);
app.listen(PORT, () => {
  console.log(`Application Listening at http://localhost:${PORT}`);
});
