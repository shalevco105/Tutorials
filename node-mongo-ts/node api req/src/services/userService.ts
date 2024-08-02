import { User } from "../models/userModel";
import fs from "fs";
import path from "path";
import { USERS_PATH } from "../constants/consts";
import RequestHandler from "./requestHandler";

const filePath = path.resolve(__dirname, "../../data/users.json");

class UserService {
  static async getAllUsers(): Promise<User[] | undefined> {
    return (await RequestHandler.sendRequest<User[]>(USERS_PATH, "GET")) || [];
  }

  static async getUserByName(userName: string): Promise<User | undefined> {
    const users =
      (await RequestHandler.sendRequest<User[]>(USERS_PATH, "GET")) || [];
    const userToReturn =
      users.find((user) => user.name === userName) || undefined;
    return userToReturn;
  }

  static async getUserById(userId: number): Promise<User | undefined> {
    return (
      (await RequestHandler.sendRequest<User>(
        `${USERS_PATH}/${userId}`,
        "GET"
      )) || undefined
    );
  }

  static async createUser(user: User): Promise<User | undefined> {
    return (
      (await RequestHandler.sendRequest<User>(USERS_PATH, "POST", user)) ||
      undefined
    );
  }

  static async updateUser(user: User, id: number): Promise<User | undefined> {
    return (
      (await RequestHandler.sendRequest<User>(
        `${USERS_PATH}/${id}`,
        "PUT",
        user
      )) || undefined
    );
  }

  static saveUserToJson(user: User | undefined): void {
    if (user && user.name.startsWith("E")) {
      let users: User[] = [];

      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        users = JSON.parse(fileData);
      }

      users.push(user);

      fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
    }
  }
}

export default UserService;
