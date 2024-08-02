import { Router, Request, Response } from "express";
import UserService from "../services/userService";
import { MongoUser } from "../models/mongoUserModel";
import MongoUserService from "../services/mongoUserService";
import { authenticateToken } from "../jwtAuth/authMiddeware";

const userRouter = Router();
userRouter.use(authenticateToken);

userRouter.get("/all", async (req: Request, res: Response) => {
  res.json((await UserService.getAllUsers()) || "Users not found");
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const user = await UserService.getUserById(id);

    if (!user) {
      res.status(404).json({ error: `User with externalId ${id} not found` });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/add", async (req: Request, res: Response) => {
  const userToAdd: MongoUser = req.body;
  if (!MongoUserService.isUserValid(userToAdd)) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    const newUser = await MongoUserService.addUser(userToAdd);
    if (newUser) {
      res.status(201).json("User created: " + newUser);
    } else {
      res
        .status(500)
        .json({ error: "Failed to add user - email is uniqe field, check it" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the user" });
  }
});

userRouter.put("/update/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userToUpdate: MongoUser = req.body;

  if (!MongoUserService.isUserValid(userToUpdate)) {
    return res.status(400).json({
      error: "At least one field is required to update",
    });
  }

  try {
    const updatedUser = await MongoUserService.updateUser(userId, userToUpdate);
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
    const deletedUser = await MongoUserService.deleteUser(userId);
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
