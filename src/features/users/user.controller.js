import { userModel } from "./user.model.js";
import jwt from "jsonwebtoken";

const model = new userModel();

export class userController {
  signup = async (req, res) => {
    try {
      const user = await model.addUser(req.body);
      if (!user) {
        return res
          .status(400)
          .send({ success: false, message: "User not created" });
      }
      res
        .status(200)
        .send({ success: true, message: "User created successfully", user });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  signin = async (req, res) => {
    try {
      const result = await model.verifyUser(req.body);
      if (!result) {
        return res
          .status(404)
          .send({ success: false, message: "User not found" });
      }
      const tocken = jwt.sign(
        {
          userId: result.id,
          email: result.email,
        },
        process.env.jwtKey,
        {
          expiresIn: "1h",
        }
      );
      await model.addToken(result.id, tocken);
      res.cookie("jwttocken", tocken);
      res.status(200).send({ success: true, message: "Login Successfull" });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  logout = async (req, res) => {
    try {
      const result = await model.removeToken(
        req.user.userId,
        req.cookies.jwttocken
      );
      if (!result) {
        return res
          .status(400)
          .send({ success: false, message: "Logout failed" });
      }
      res.clearCookie("jwttocken");
      res.status(200).send({ success: true, message: "Logout successfull" });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  logoutAllDevices = async (req, res) => {
    try {
      const result = await model.removeAllToken(req.user.userId);
      if (!result) {
        return res
          .status(400)
          .send({ success: false, message: "Logout failed" });
      }
      res.clearCookie("jwttocken");
      res
        .status(200)
        .send({
          success: true,
          message: "Logout successfull from all devices",
        });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  getUserDetails = async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await model.getUserById(userId);
      if (!user) {
        return res
          .status(400)
          .send({ success: false, message: "User not found" });
      }
      res.status(200).send({ success: true, message: "User found", user });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  getAllUserDetails = async (req, res) => {
    try {
      const users = await model.getAllUsers();
      if (!users) {
        return res
          .status(400)
          .send({ success: false, message: "Users not found" });
      }
      res.status(200).send({ success: true, message: "Users found", users });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  updateUserDetails = async (req, res) => {
    const userId = req.params.userId;
    try {
      let user = null;
      if (req.body.password) {
        return res
          .status(401)
          .send({
            success: false,
            message: "Can not use this route to update the password",
          });
      } else {
        user = await model.updateUser(userId, req.body);
      }
      if (!user) {
        return res
          .status(400)
          .send({ success: false, message: "User not found" });
      }
      res.status(200).send({ success: true, message: "User updated", user });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };
}
