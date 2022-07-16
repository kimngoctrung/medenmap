import { Response } from "express";
import fs from "fs";
import database from "../../listuser.json";
import NumberMessage from "../../Model/Status/IEnum";
import { IUser } from "../../Model/User/IUser";

const removeService = (id: string, res: Response) => {
  try {
    const newListUser = database.filter((item: IUser) => {
      item.id != id;
    });
    fs.writeFileSync("./src/listuser.json", JSON.stringify([...newListUser]));
    res.status(NumberMessage.Success).send("Delete Successfull");
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
export default removeService;
