import { Router, Request, Response } from "express";
import UserService from "../services/userService";
import { User } from "../models/userModel";

const userRouter = Router();

userRouter.get("/all", async (req: Request, res: Response) => {
  res.json((await UserService.getAllUsers()) || "Users not found");
});

userRouter.get("/id/:id", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  let userToFind = await UserService.getUserById(userId);
  UserService.saveUserToJson(userToFind);
  res.json(userToFind || "User not found");
});

userRouter.get("/name/:name", async (req: Request, res: Response) => {
  const userName = req.params.name;
  let userToFind = await UserService.getUserByName(userName);
  UserService.saveUserToJson(userToFind);
  res.json(userToFind || "User not found");
});

userRouter.post("/create", async (req: Request, res: Response) => {
  const userToAdd: User = req.body;
  const resUser = await UserService.createUser(userToAdd);
  res.json(`user created: ${resUser?.name}`);
});

userRouter.put("/update/:id", async (req: Request, res: Response) => {
  const userToUpdate: User = req.body;
  const userId = parseInt(req.params.id);
  const userToFind = await UserService.getUserById(userId);
  if (userToFind) {
    const resUser = await UserService.updateUser(userToUpdate, userId);
    res.json(`user updated: ${resUser?.name}`);
  } else {
    res.json(`User not found`);
  }
});

export default userRouter;
