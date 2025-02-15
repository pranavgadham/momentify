import {
  hashPassword,
  compareHashedPassword,
} from "../../util/hashPassword.js";
import User from "./user.schema.js";
import mongoose from "mongoose";

export class userModel {
  addUser = async ({ name, email, password, gender, avatar }) => {
    try {
      const user = User({
        name: name,
        email: email,
        password: await hashPassword(password),
        gender: gender,
        avatar: avatar,
      });
      const result = await user.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  verifyUser = async ({ email, password }) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("User not found");
      }
      if (await compareHashedPassword(password, user.password)) {
        return user;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addToken = async (userId, tocken) => {
    try {
      const user = await User.findById(userId);

      if(user){
        user.tocken.push(tocken);
        await user.save();
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  verifyToken = async (userId,tocken) => {
    try {
      const user = await User.findById(userId);
      if(user){
        if(user.tocken.includes(tocken)){
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  removeToken = async (userId,tocken) => {
    try {
      const user = await User.findById(userId);
      if(user){
        user.tocken = user.tocken.filter((t) => t !== tocken);
        await user.save();
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  removeAllToken = async (userId) => {
    try {
      const user = await User.findById(userId);
      if(user){
        user.tocken = [];
        await user.save();
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  };
}
