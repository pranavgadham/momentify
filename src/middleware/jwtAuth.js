import jwt from "jsonwebtoken";
import { userModel } from "../features/users/user.model.js";

const model = new userModel();

export const jwtAuth = (req, res, next) => {
  const jwtToken = req.cookies.jwttocken;
  try {
    const { userId, email } = jwt.verify(jwtToken, process.env.jwtKey);
    if (userId && model.verifyToken(userId, jwtToken)) {
      req.user = { userId, email };
      next();
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      msg: { name: "JsonWebTokenError", message: "jwt must be provided" },
    });
  }
};
