import { Response } from "express";
import fs from "fs";
import database from "../../listuser.json";
import NumberMessage from "../../Model/Status/IEnum";
import { IUser } from "../../Model/User/IUser";
import { messageApi } from "../../Model/Status/Message";

const getListUserService = (res: Response) => {
  try {
    const databaseReadFile: string = fs.readFileSync(
      "./src/listuser.json",
      "utf8"
    );
    const newDatabase: IUser[] = [];
    const data: IUser[] = JSON.parse(databaseReadFile);
    data.map((item) => {
      const newItem = { ...item, password: "" };
      return newDatabase.push(newItem);
    });
    res.status(NumberMessage.Success).send({ messageApi, data: newDatabase });
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
export default getListUserService;
