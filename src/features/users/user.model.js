import {
  hashPassword,
  compareHashedPassword,
} from "../../util/hashPassword.js";
import User from "./user.schema.js";

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

      if (user) {
        user.tocken.push(tocken);
        await user.save();
      }
    } catch (error) {
      console.log(error);
    }
  };

  verifyToken = async (userId, tocken) => {
    try {
      const user = await User.findById(userId);
      if (user) {
        if (user.tocken.includes(tocken)) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  removeToken = async (userId, tocken) => {
    try {
      const user = await User.findById(userId);
      if (user) {
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
      if (user) {
        user.tocken = [];
        await user.save();
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  getUserById = async (userId) => {
    try {
      const user = await User.findById(userId, {
        name: 1,
        email: 1,
        gender: 1,
        avatar: 1,
        friends: 1,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  getAllUsers = async () => {
    try {
      const users = await User.find(
        {},
        {
          name: 1,
          email: 1,
          gender: 1,
          avatar: 1,
          friends: 1,
        }
      );
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (userId, data) => {
    try {
      const user = await User.findById(userId);
      if (data.name) {
        user.name = data.name;
      }
      if (data.email) {
        user.email = data.email;
      }
      if (data.gender) {
        user.gender = data.gender;
      }
      if (user.avatar) {
        user.avatar = data.avatar;
      }
      return user.save();
    } catch (error) {
      console.log(error);
    }
  };

}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default getUserByEmail;
