import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import passport from "passport";
const viewsUser = Router();

//Vista que renderiza el home segun el logueo
viewsUser.get("/home", async (req, res) => {
  try {
    res.render("bienvenida", { title: "Home | Hola!" });
  } catch (error) {
    res.render("error", { title: "Página no encontrada" });
  }
});

viewsUser.get("/homeUserLog", async (req, res) => {
  try {
    res.render("homeUserLog", { title: "Home | Hola Usuario!" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});
viewsUser.get("/homeAdmin", async (req, res) => {
  try {
    res.render("homeAdming", { title: "Home |  Hola Administrador!" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

viewsUser.get("/homePremiun", async (req, res) => {
  try {
    res.render("homePremiun", { title: "Home |   Hola Usuario Premiun!" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

viewsUser.get("/login", async (req, res) => {
  try {
    res.render("login", { title: "Login" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

viewsUser.get("/register", async (req, res) => {
  try {
    res.render("register", { title: "Register" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

viewsUser.post(
  "/register",
  passport.authenticate("register", {
    successRedirect: "/users/home",
    failureRedirect: "/users/error",
  }),
  userController.postRegister
);
viewsUser.post(
  "/login",
  // passport.authenticate("login", {
  //   successMessage: "Login Exitoso",
  //   failureMessage: "Login Fallido",
  // }),
  userController.postLogin
);
viewsUser.get("/error", async (req, res) => {
  try {
    res.render("error", { title: "Error en la pagina" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default viewsUser;
