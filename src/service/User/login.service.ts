import bcrypt from "bcrypt";
import { IUser } from "../../Model/User/IUser";
import database from "../../listuser.json";
import NumberMessage from "../../Model/Status/IEnum";
import { messageApi } from "../../Model/Status/Message";
import { Response } from "express";

const loginService = async (res: Response, user: IUser) => {
  try {
    const index = database.findIndex((item: IUser) => {
      return item.userEmail === user.userEmail;
    });
    const match = await bcrypt.compare(user.password, database[index].password);

    if (match) {
      res
        .status(NumberMessage.Success)
        .send({ messageApi, data: { ...database[index], password: "" } });
    } else {
      res.status(NumberMessage.ErrorSever).send("Email or Password Is Invalid");
    }
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
export default loginService;
