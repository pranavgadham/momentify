import { hashPassword,compareHashedPassword } from "../../util/hashPassword.js";
const Users = [];

export class userModel{
    addUser = async ({ name, email, password }) => {
        try {
          const user = {
            id: Date.now(),
            name: name,
            email: email,
            password: await hashPassword(password),
          };
          Users.push(user);
          return user;
        } catch (error) {
          console.log(error);
        }
    };
    verifyUser = async ({email,password}) => {
        try {
            const user = Users.find((u => u.email == email));

            if(await compareHashedPassword(password,user.password)){
              return user;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

