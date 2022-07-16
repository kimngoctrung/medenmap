import { Response } from "express";
import NumberMessage from "../../Model/Status/IEnum";
import database from "../../listuser.json";
import { IUser } from "../../Model/User/IUser";
import { messageApi } from "../../Model/Status/Message";

const getDetailService = (res: Response, id: string) => {
  try {
    const userDetail = database.find((item: IUser) => {
      return item.id === id;
    });
    res.status(NumberMessage.Success).send({ messageApi, data: userDetail });
  } catch (err: unknown) {
    res.status(NumberMessage.ErrorSever).send(err as string);
  }
};
export default getDetailService;
