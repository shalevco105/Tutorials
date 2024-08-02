import { Router, Request, Response } from "express";
import UserService from "../services/userService";
import TodoService from "../services/todoService";

const todoRouter = Router();

todoRouter.get("/:name", async (req: Request, res: Response) => {
  const userName = req.params.name;
  const userToFind = await UserService.getUserByName(userName);

  let dataToSend: any = "User not found";

  if (userToFind) {
    const userTodos = await TodoService.getTasksByUserId(userToFind.id);
    dataToSend = {
      name: userToFind.name,
      email: userToFind.email,
      tasks: userTodos,
    };
  }

  res.json(dataToSend);
});

export default todoRouter;
