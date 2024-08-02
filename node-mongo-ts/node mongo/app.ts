import express from "express";
import userRouter from "./src/routers/userRouter";
import connectDB from "./src/dbConnect";

const app = express();
connectDB();

app.use(express.json());

app.use("/user", userRouter);

app.listen(3000);
