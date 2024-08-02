import mongoose, { Document, Schema, Types } from "mongoose";
import { encrypt, decrypt } from "../jwtAuth/cryptoUtil"; // Adjust the path if necessary
const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";

export interface MongoUser extends Document {
  _id: Types.ObjectId;
  externalId: number;
  city: string;
  country: string;
  email: string;
  password: string;
  comparePassword(password: string): boolean;
}

const UserSchema: Schema<MongoUser> = new Schema({
  externalId: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre<MongoUser>("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = encrypt(this.password);
  }
  next();
});

UserSchema.methods.comparePassword = function (
  candidatePassword: string
): boolean {
  return decrypt(this.password) === candidatePassword;
};

const User = mongoose.model<MongoUser>("User", UserSchema, "user");

export default User;
