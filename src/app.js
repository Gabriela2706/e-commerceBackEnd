import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import productRouter from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import ticketRouter from "./routes/ticketRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import userRoute from "./routes/userRoute.js";
import __dirname from "./dirname.js";
import passport from "passport";
import initLocalStrategy from "./config/passport.js";
import handlebars from "express-handlebars";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import viewsUser from "./routes/viewsRoutes/userViewsRoute.js";
import { LoggerDEV, LoggerPROD } from "./middlewares/loggerWinston.js";
import {
  errorLoggerDEV,
  errorLoggerPROD,
} from "./middlewares/errorHandlerDefault.js";
import viewsProduct from "./routes/viewsRoutes/productViewsRoute.js";
import options from "./utils/swagger.js";
import bodyParser from "body-parser";

const app = express();
//CONEXON CON MONGOOSE ATLAS
await mongoose.connect(config.MONGO_URL);
//CONFIGURACION DE SWAGGER
const specs = swaggerJSDoc(options);

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/docs", serve, setup(specs));
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,

    store: new MongoStore({
      mongoUrl: config.MONGO_URL,
      ttl: 3000,
    }),
    ttl: 3000,
  })
);
app.use(LoggerPROD, LoggerDEV);

//CONFIGURACOON DE HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

//RUTAS DE EXPRESS
app.use("/api/products", productRouter);
app.use("/api/carts", cartRoute);
app.use("/api/tickets", ticketRouter);
app.use("/api/payments", paymentRoute);
app.use("/api/auth", userRoute);
app.use("/users", viewsUser);
app.use("/products", viewsProduct);

//MIDDLEWARS MANEJO DE ERRORES
app.use(errorLoggerPROD, errorLoggerDEV);
//CONTENIDO ESTATICO
//app.use(express.static(path.join(__dirname + "../public")));

app.use("/", express.static(__dirname + "/public"));
//app.use(express.static(`${__dirname}/public`));

//INICIALIZACION DE PASSPORT
initLocalStrategy();
app.use(passport.initialize());
app.use(passport.session());

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en puerto ${config.PORT}`);
});
