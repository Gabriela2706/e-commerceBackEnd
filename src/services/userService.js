import bcrypt from "bcrypt";
import UserDAO from "../dao/mongo/userDB.js";
import { tokenGenerate } from "../config/jwt.js";

const userDB = new UserDAO();

export const newRegister = async (user) => {
  try {
    //validacion de si existe el email
    // const emailExist = await userDB.findOne(user.email);
    // if (emailExist) return "Email ya registrado";
    // condiciones del registro: Role, generacion de la salt, hasheo del pass
    user.role = user.email == "admincoder@coder.com" ? "admin" : "visit";
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const createUser = await userDB.create(user);
    if (!createUser) return res.send({ message: "Datos incompletos" });

    return createUser.toObject();
  } catch (error) {
    console.log(error.message);
  }
};
export const userExist = async (email) => {
  try {
    const emailExist = await userDB.findOne(email);
    if (!emailExist) return "El email ingresado no es valido";
    return emailExist;
  } catch (error) {
    console.log(error.message);
  }
};
export const loginStrategyLocal = async (data) => {
  try {
    const login = await bcrypt.compare(password, data.password);

    //Aca se genera el token
    const token = tokenGenerate({
      sub: createUser._id,
      createUser: { email: createUser.email },
    });

    res.cookie("accessToken", token, {
      //Aca se guarda en una cookie
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return login;
  } catch (error) {
    console.log(error.message);
  }
};
