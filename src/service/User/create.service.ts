import { Response } from "express";
import fs from "fs";
import database from "../../listuser.json";
import NumberMessage from "../../Model/Status/IEnum";
import { messageApi } from "../../Model/Status/Message";
import { IUser } from "../../Model/User/IUser";

const createService = (res: Response, newUser: IUser) => {
  try {
    const newListUser = [...database, newUser];
    fs.writeFileSync("./src/listuser.json", JSON.stringify(newListUser));
    res.status(NumberMessage.Success).send({
      messageApi,
      data: { ...newUser, password: "" },
    });
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
export default createService;
