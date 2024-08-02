import { FullUser } from "../models/fullUserModel";
import ApiUserService from "./apiUserService";
import JsonUserService from "./jsonUserService";
import MongoUserService from "./mongoUserService";

class UserService {
  static async getAllUsers(): Promise<FullUser[] | { error: string }> {
    try {
      const mongoUsers = await MongoUserService.getAllUsers();
      if (!mongoUsers || mongoUsers.length === 0) {
        return { error: "No users found in MongoDB" };
      }

      const fullUsers: FullUser[] = [];
      for (const mongoUser of mongoUsers) {
        try {
          const apiUser = await ApiUserService.getUserById(
            mongoUser.externalId
          );
          const jsonUser = await JsonUserService.getUserById(
            mongoUser.externalId
          );

          if (!jsonUser) {
            return { error: "No user found in json" };
          } else if (!apiUser) {
            return { error: "No user found in api" };
          } else {
            const fullUser: FullUser = {
              id: mongoUser.externalId,
              phone: jsonUser.phone,
              name: apiUser.name,
              username: apiUser.username,
              email: apiUser.email,
              address: {
                city: mongoUser.city,
                country: mongoUser.country,
              },
              website: apiUser.website,
              company: apiUser.company,
            };
            fullUsers.push(fullUser);
          }
        } catch (error) {
          return {
            error: `Error fetching data for externalId ${mongoUser.externalId}:`,
          };
        }
      }

      return fullUsers;
    } catch (error) {
      console.error("Error in getAllUsers method:", error);
      return { error: "Internal server error" };
    }
  }

  static async getUserById(
    externalId: number
  ): Promise<FullUser | { error: string }> {
    try {
      const mongoUser = await MongoUserService.getUserById(externalId);
      if (!mongoUser) {
        return {
          error: `User with externalId ${externalId} not found in MongoDB`,
        };
      }

      const apiUser = await ApiUserService.getUserById(externalId);
      if (!apiUser) {
        return { error: `User with externalId ${externalId} not found in API` };
      }

      const jsonUser = await JsonUserService.getUserById(externalId);
      if (!jsonUser) {
        return {
          error: `User with externalId ${externalId} not found in JSON file`,
        };
      }

      const fullUser: FullUser = {
        id: mongoUser.externalId,
        phone: jsonUser.phone,
        name: apiUser.name,
        username: apiUser.username,
        email: apiUser.email,
        address: {
          city: mongoUser.city,
          country: mongoUser.country,
        },
        website: apiUser.website,
        company: apiUser.company,
      };

      return fullUser;
    } catch (error) {
      console.error("Error in getById method:", error);
      return { error: "Internal server error" };
    }
  }

 
}

export default UserService;
