import fetchDbHandler from "../handlers/fetchDbHandler";
import User, { MongoUser } from "../models/mongoUserModel";

class MongoUserService {
  static async getAllUsers(): Promise<MongoUser[] | null> {
    return fetchDbHandler(async () => {
      return await User.find();
    });
  }

  static async getUserById(externalId: number): Promise<MongoUser | null> {
    return fetchDbHandler(async () => {
      return await User.findOne({ externalId });
    });
  }

  static async addUser(userData: MongoUser): Promise<MongoUser | null> {
    try {
      const newUser = new User(userData);
      return await newUser.save();
    } catch (error) {
      console.error("Error adding user:", error);
      return null;
    }
  }

  static async updateUser(
    id: string,
    userData: MongoUser
  ): Promise<MongoUser | null> {
    try {
      console.log(id);
      console.log(userData);
      const updatedUser = await User.findByIdAndUpdate(id, userData, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error);
      return null;
    }
  }

  static async deleteUser(id: string): Promise<MongoUser | null> {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      return null;
    }
  }

  static isUserValid = (user: any) => {
    return (
      user &&
      user.externalId &&
      user.city &&
      user.country &&
      user.email &&
      user.password
    );
  };
}

export default MongoUserService;
