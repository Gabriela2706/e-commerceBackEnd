//configuracion de passport estrategis
import passport from "passport";
import local from "passport-local";
import GithubStrategy from "passport-github2";
import * as userService from "../services/userService.js";

const initLocalStrategy = () => {
  // REGISTRO
  passport.use(
    "register",
    new local.Strategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, email, password, done) => {
        try {
          const emailExist = await userService.userExist(email);
          if (emailExist)
            return done(null, false, "Email inválido o ya registrado");

          const newUser = await userService.newRegister(req.body);
          console.log(newUser);
          return done(null, newUser);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  //LOGIN
  passport.use(
    "login",
    new local.Strategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, email, password, done) => {
        try {
          const login = await userService.loginStrategyLocal(email, password);

          if (!login) {
            return done(null, false, {
              message: "Email y/o contraseña inválidos",
            });
          }
          return done(null, login);
        } catch (error) {
          console.error(error.message);
          return done(error);
        }
      }
    )
  );

  //ESTRATEGIA DE GITHUB
  passport.use(
    "github",
    new GithubStrategy(
      {
        //primer llamada con los datos de la estrategia
        clientID: "Iv1.dde9419804abf4e4",
        clientSecret: "04a5adc86c0ded9893b9168123dde497bf58d5fb",
        callbackURL: "http://localhost:8082/api/viewsUser/authgithub",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile._json.email;
          const user = await userService.userExist(email);

          if (user) return done(null, user);

          const createUser = await userService.newRegister({
            name: profile._json.name,
            lastName: profile._json.name,
            email,
            password: "", // Considera generar una contraseña aleatoria aquí
            role:
              profile._json.email === "admincoder@coder.com"
                ? "admin"
                : "visit",
          });

          done(null, createUser);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.serializeUser((newUser, next) => {
    next(null, newUser.email);
  });

  passport.deserializeUser(async (email, next) => {
    try {
      const user = await userService.userExist(email);

      if (!user) {
        return next("Usuario no encontrado");
      }

      next(null, user);
    } catch (e) {
      console.log(e.message);
      next(e);
    }
  });
};

export default initLocalStrategy;
