import { Router, Request, Response } from "express";
import User from "../models/mongoUserModel";
import { generateToken } from "../jwtAuth/jwtUtil";

const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found - Invalid email" });
    }

    
    if (!user.comparePassword(password)) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = generateToken(user._id.toString());
    console.log("Generated Token:", token); 
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default authRouter;
