import bcrypt from "bcrypt";
import UserDAO from "../dao/mongo/userDB.js";
import { tokenGenerate } from "../config/jwt.js";

const userDB = new UserDAO();

export const newRegister = async (user) => {
  try {
    user.role = user.email == "admincoder@coder.com" ? "admin" : "visit";
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const createUser = await userDB.create(user);
    if (!createUser)
      throw new Error("Datos incompletos o error en la creación del usuario");
    return createUser.toObject();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
export const userExist = async (email) => {
  try {
    const user = await userDB.findOne(email);
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const loginStrategyLocal = async (email, password) => {
  try {
    const user = await userDB.findOne(email);

    if (!user) {
      return false;
    }

    const login = await bcrypt.compare(password, user.password);

    if (login) {
      const token = tokenGenerate({
        sub: user._id,
        user: { email: user.email },
      });
      return token;
    }

    return login;
  } catch (error) {
    throw error;
  }
};
