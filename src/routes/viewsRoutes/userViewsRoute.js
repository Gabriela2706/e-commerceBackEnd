import { Router } from "express";
const viewsUser = Router();

viewsUser.get("/home", async (req, res) => {
  try {
    res.render("homeAdmin", { title: "Home | Bienvenidos" });
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

viewsUser.get("/error", async (req, res) => {
  try {
    res.render("error", { title: "Error en la pagina" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default viewsUser;
