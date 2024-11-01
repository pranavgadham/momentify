import { userModel } from "./user.model.js";
import jwt from "jsonwebtoken";

const model = new userModel();

export class userController {
  signup = async(req, res) => {
    try {
      const user = await model.addUser(req.body);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  signin = async(req, res) => {
    try {
      const result = await model.verifyUser(req.body);
      if (!result) {
        return res.status(404).send("User not found");
      }
      const token = jwt.sign(
        {
          userId: result.id,
          email: result.email,
        },
        process.env.jwtKey,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("jwtToken",token);
      res.status(200).send("Login Successfull");
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}
