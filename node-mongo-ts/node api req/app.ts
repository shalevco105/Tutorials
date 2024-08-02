import express from "express";
import userRouter from "./src/routers/userRouter";
import todoRouter from "./src/routers/todoRouter";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.listen(3000);
