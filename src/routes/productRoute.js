import { Router } from "express";
import * as productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/", productController.postCreateProd);
productRouter.get("/", productController.getProductsPaginate);
productRouter.put("/:id", productController.putUpdateProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.get("/test", (req, res) => {
  let responde = "responde" + request;
  return res.status(200).json({
    message: "logger Warn",
    response: true,
  });
});

export default productRouter;
