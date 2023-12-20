import { Router } from "express";
const viewsProduct = Router();

viewsProduct.get("/newPRoduct", async (req, res) => {
  try {
    res.render("newProduct", { title: "Nuevo Producto" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

viewsProduct.get("/products", async (req, res) => {
  try {
    res.render("products", { title: "productos" });
  } catch (error) {
    res.render("error", { title: "Pagina no encontrada" });
  }
});

export default viewsProduct;
