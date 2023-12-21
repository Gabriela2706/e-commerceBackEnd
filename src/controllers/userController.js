import * as userService from "../services/userService.js";

export const postRegister = async (req, res) => {
  try {
    console.log("Llego al controler");
    const { name, lastName, email, age, password } = req.body;
    const register = await userService.newRegister({
      name,
      lastName,
      email,
      age,
      password,
    });
    res.status(201).json({ status: "success", response: register });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ingreso = await userService.loginStrategyLocal(email, password);
    res.status(201).json({ status: "success", response: ingreso });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getGitHubRedirect = async (req, res) => {};
export const postGitHubCallBack = async (req, res) => {};

export const postSignOut = async (req, res) => {
  try {
    req.session.destroy((e) => {
      res.status(200).render(`signout`);
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const putUpdatePassword = async (req, res) => {
  try {
    //para actualizar la contraseña del usuario logueado
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const putUpdatePremiun = async (req, res) => {
  try {
    //para actualizar el usuario a premiun
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
