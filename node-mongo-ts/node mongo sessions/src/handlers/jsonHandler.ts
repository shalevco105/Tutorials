import fs from "fs";
import path from "path";
import { JsonUser } from "../models/jsonUserModel";
const jsonFilePath = path.join(__dirname, "../../phones.json");

class JsonHandler {
  static async fetchUserDataFromJson(
    userId: number
  ): Promise<JsonUser | undefined> {
    return new Promise<JsonUser | undefined>((resolve, reject) => {
      fs.readFile(jsonFilePath, "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        try {
          const users: JsonUser[] = JSON.parse(data);
          const user = users.find((user: JsonUser) => user.id === userId);
          resolve(user);
        } catch (parseError) {
          reject(parseError);
        }
      });
    });
  }
}
export default JsonHandler;
