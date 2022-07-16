import express, { Request, Response, NextFunction } from "express";
import {
  creatUser,
  deteleUser,
  getDetailUser,
  getListUser,
  updateUser,
  userLogin,
} from "../../controller/user.controller";
import { hashPasswordMiddleware } from "../../middleware/UserMiddleware/user.middleware";
import { IUser } from "../../Model/User/IUser";

const userRouter = express.Router();
userRouter.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    const user: IUser = req.body;
    hashPasswordMiddleware(user);
    next();
  },
  creatUser
);
userRouter.put(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const user: IUser = req.body;
    hashPasswordMiddleware(user);
    next();
  },
  updateUser
);
userRouter.delete("/:id", deteleUser);
userRouter.get("/:id", getDetailUser);
userRouter.get("/", getListUser);
userRouter.post("/sign-in", userLogin);
export default userRouter;
