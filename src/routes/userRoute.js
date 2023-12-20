import { Router } from "express";
import * as userController from "../controllers/userController.js";
import passport from "passport";

const userRoute = Router();
//register con passport
// userRoute.post(
//   "/register",
//   passport.authenticate("register", {
//     successRedirect: "/users/login",
//     failureRedirect: "/users/error",
//   }),
//   userController.postRegister
// );

//login con estrategia local
userRoute.post(
  "/login",
  passport.authenticate("login", {
    successMessage: "Login Exitoso",
    failureMessage: "Login Fallido",
  }),
  userController.postLogin
);

//Redirect al login con GitHub
userRoute.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  userController.getGitHubRedirect
);

//CallBack al auth de GitHub
userRoute.post(
  "/authgithub",
  passport.authenticate("github", {
    successMessage: "Login exitoso con GitHub",
    failureMessage: "Login fallido con GitHub",
  }),
  userController.postGitHubCallBack
);
userRoute.post("/signout", userController.postSignOut);
userRoute.put("/", userController.putUpdatePassword);
userRoute.put("/prem", userController.putUpdatePremiun);

export default userRoute;
