import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
