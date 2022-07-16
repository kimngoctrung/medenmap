import fs from "fs";
import database from "../listuser.json";
import { Request, Response } from "express";
import { IUser } from "../Model/User/IUser";
import NumberMessage from "../Model/Status/IEnum";
import { messageApi } from "../Model/Status/Message";
import userService from "../service/User";

const creatUser = (req: Request, res: Response) => {
  const user: IUser = req.body;
  const createId = Date.now();
  const id = createId.toString();
  const newUser = { ...user, id };
  userService.createService(res, newUser);
};
const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const newUser: IUser = req.body;
  userService.updateService(res, id, newUser);
};
const deteleUser = (req: Request, res: Response) => {
  const { id } = req.params;
};
const getListUser = (req: Request, res: Response) => {
  try {
    const handleDatabase = database.map((item: IUser) => {
      const newUser = { ...item, password: "" };
      const newDatabase = [...[], newUser];
      return newDatabase;
    });
    res
      .status(NumberMessage.Success)
      .send({ messageApi, data: handleDatabase });
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
const getDetailUser = (req: Request, res: Response) => {
  const { id } = req.params;
  userService.getDetailService(res, id);
};
const userLogin = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  userService.loginService(res, user);
};
export {
  creatUser,
  updateUser,
  deteleUser,
  getListUser,
  getDetailUser,
  userLogin,
};
