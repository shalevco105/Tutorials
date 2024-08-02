import { JsonUser } from "../models/jsonUserModel";
import JsonHandler from "../handlers/jsonHandler";

class JsonUserService {
  static async getUserById(id: number): Promise<JsonUser | undefined> {
    return await JsonHandler.fetchUserDataFromJson(id);
  }
}

export default JsonUserService;
