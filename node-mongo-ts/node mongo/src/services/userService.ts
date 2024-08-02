import User, { IUser } from "../models/userModel";

class UserService {
  static async getAllUsers(): Promise<IUser[] | undefined> {
    return await User.find();
  }

  static async getUserById(id: string): Promise<IUser | null> {
    try {
      return await User.findById(id);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
  }

  static async getUsersByAge(age: number): Promise<IUser[]> {
    try {
      return await User.find({ age });
    } catch (error) {
      console.error("Error fetching users by age:", error);
      return [];
    }
  }

  static async addUser(userData: IUser): Promise<IUser | null> {
    try {
      const newUser = new User(userData);
      return await newUser.save();
    } catch (error) {
      console.error("Error adding user:", error);
      return null;
    }
  }

  static async updateUser(id: string, userData: IUser): Promise<IUser | null> {
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

  static async deleteUser(id: string): Promise<IUser | null> {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      return null;
    }
  }
}

export default UserService;
