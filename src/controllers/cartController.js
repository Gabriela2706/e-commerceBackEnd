import * as cartService from "../services/cartService.js";

export const postCreateCart = async (req, res) => {
  try {
    //aca recibo del body la informacion para la creacion del carrito id/nombre/cantidad = products
    const products = req.body;
    const newCart = await cartService.createCart(products);
    res.status(201).json({ status: "success", response: newCart });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getCartProducts = async (req, res) => {
  try {
    //logica de ver los productos de un carrito llamando al service.
    const getcart = await cartService.productCart();
    res.status(201).json({ status: "success", response: getcart });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const postAddProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const addproducts = await cartService.addProductToCart(cid, pid);

    res.send(addproducts);
  } catch (e) {
    //res.status(404).send({ error: true, msg: e.message });
    res.send(e);
  }
};

export const putUpdateProdOfCart = async (req, res) => {
  try {
    //aca recibo por params el id del producto
    const id = req.params;
    //y por body el cambio que quiero realizar
    const { data } = req.body;
    let newUpdate = await cartService.updateProdOfCart(id, data);
    res.status(200).json({ status: "success", response: newUpdate });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteOneProdOfCart = async (req, res) => {
  try {
    //aca recibo por params el id del producto
    const id = req.params;
    let deleteOneProd = await cartService.deleteProdOfCart(id);
    res.status(200).json({ status: "success", response: deleteOneProd });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
