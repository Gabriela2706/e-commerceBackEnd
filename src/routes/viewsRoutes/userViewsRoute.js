import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import passport from "passport";
const viewsUser = Router();

//Vista que renderiza el home segun el logueo
viewsUser.get("/home", async (req, res) => {
  try {
    switch (req.user) {
      case "admin":
        res.render("homeAdmin", { title: "Home | Hola Administrador!" });
        break;
      case "user":
        res.render("homeUserLog", { title: "Home | Hola Usuario!" });
        break;
      case "premiun":
        res.render("homePremiun", { title: "Home | Hola Usuario Premiun!" });
        break;
      case "visit":
        res.render("bienvenida", { title: "Home | Hola!" });
      default:
        res.render("bienvenida", { title: "Home | Hola!" });
        break;
    }
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
    successRedirect: " /users/login",
    //failureRedirect: "/users/error",
    failureMessage: "Error en la auth",
  }),
  userController.postRegister
);

viewsUser.get("/error", async (req, res) => {
  try {
    res.render("error", { title: "Error en la pagina" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default viewsUser;
