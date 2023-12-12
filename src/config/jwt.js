import jwt from "jsonwebtoken";
import config from "./config.js";

export const SECRET = config.JWT_SECRET;

//Este metodo vamos a llamar para la generacion de login
export const tokenGenerate = (objet) =>
  jwt.sign(objet, SECRET, { expiresIn: "1h" }); //Generar token
