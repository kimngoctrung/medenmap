import { Response } from "express";
import fs from "fs";
import database from "../../listuser.json";
import NumberMessage from "../../Model/Status/IEnum";
import { messageApi } from "../../Model/Status/Message";
import { IUser } from "../../Model/User/IUser";
const updateService = (res: Response, id: string, newUser: IUser) => {
  try {
    const index: number = database.findIndex((item: IUser) => {
      return item.id === id;
    });
    if (index < 0) {
      return res.status(404).send("User Not Found");
    }
    const userUpdate = { ...database[index], ...newUser };
    fs.writeFileSync("./src/listuser.json", JSON.stringify([...database]));
    res.status(NumberMessage.Success).send({
      messageApi,
      data: { ...userUpdate, pasword: "" },
    });
  } catch (err: unknown) {
    console.log(err as string);
  }
};
export default updateService;
