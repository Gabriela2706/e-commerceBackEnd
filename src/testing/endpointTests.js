import { Router } from "express";
import productsFaker from "../utils/productFaker.js";
import productModel from "../schemas/productSchema.js";

const routerTest = Router();

routerTest.get("/login", async (req, res) => {});

routerTest.post("/create", async (req, res) => {
  try {
    let data = productsFaker();
    await productModel.create(data);
    return res.status(201).json({ response: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

routerTest.delete("/delete/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const oneProduct = await productModel.findByIdAndDelete(id);
    return res.status(201).json({ response: oneProduct });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

routerTest.post("/signout", async (req, res) => {});

export default routerTest;
