import express from "express";
import authRouter from "./src/routers/authRouter";
import userRouter from "./src/routers/userRouter";
import sessionCookieRouter from "./src/routers/sessionCookieRouter";
import connectDB from "./src/dbConnect";
import dotenv from "dotenv";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use("/session", sessionCookieRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(3000);
