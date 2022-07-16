import { NextFunction, Request } from "express";
import { IUser } from "../../Model/User/IUser";
import bcrypt from "bcrypt";
import database from "../../listuser.json";

//------------HASH PASSWORD
const hashPassword = (user: IUser) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user.password, salt);
  return hash as string;
};
const hashPasswordMiddleware = (user: IUser) => {
  const hash = hashPassword(user);
  user.password = hash;
};

export { hashPasswordMiddleware };
