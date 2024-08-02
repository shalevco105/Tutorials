import { Router, Request, Response } from "express";
import UserService from "../services/userService";
import { IUser } from "../models/userModel";

const userRouter = Router();

userRouter.get("/all", async (req: Request, res: Response) => {
  res.json((await UserService.getAllUsers()) || "Users not found");
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await UserService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user" });
  }
});

userRouter.get("/age/:age", async (req: Request, res: Response) => {
  const age = parseInt(req.params.age);
  if (isNaN(age)) {
    return res.status(400).json({ error: "Invalid age parameter" });
  }
  try {
    const users = await UserService.getUsersByAge(age);
    if (users.length > 0) {
      res.json(users);
    } else {
      res
        .status(404)
        .json({ message: "No users found with the specified age" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching users by age" });
  }
});

userRouter.post("/add", async (req: Request, res: Response) => {
  const userToAdd: IUser = req.body;
  if (
    !userToAdd ||
    !userToAdd.name ||
    !userToAdd.email ||
    typeof userToAdd.age !== "number"
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    const newUser = await UserService.addUser(userToAdd);
    if (newUser) {
      res.status(201).json("User created: " + newUser);
    } else {
      res.status(500).json({ error: "Failed to add user" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the user" });
  }
});

userRouter.put("/update/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userToUpdate: IUser = req.body;

  if (
    !userToUpdate ||
    !userToUpdate.name ||
    !userToUpdate.email ||
    !userToUpdate.age
  ) {
    return res.status(400).json({
      error: "At least one field (name, email, age) is required to update",
    });
  }

  try {
    const updatedUser = await UserService.updateUser(userId, userToUpdate);
    if (updatedUser) {
      res.json("User updated: " + updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
});

userRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const deletedUser = await UserService.deleteUser(userId);
    if (deletedUser) {
      res.json({ message: "User successfully deleted: ", deletedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
});
export default userRouter;
