import mongoose from "mongoose";
const MONGO_PATH = process.env.MONGO_PATH || "localhost:27017";

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${MONGO_PATH}/db`, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
