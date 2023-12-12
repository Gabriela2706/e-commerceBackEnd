import { Router } from "express";
import * as cartController from "../controllers/cartController.js";

const cartRoute = Router();

cartRoute.post("/", cartController.postCreateCart);
cartRoute.get("/", cartController.getCartProducts);
cartRoute.post("/product/:id", cartController.postAddProductToCart);
cartRoute.put("/:id", cartController.putUpdateProdOfCart);
cartRoute.delete("/:id", cartController.deleteOneProdOfCart);

export default cartRoute;
