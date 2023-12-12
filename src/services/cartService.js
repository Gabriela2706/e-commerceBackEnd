//aca va la logica de negocio, los mapeos, los switch y demas logica
import CartDAO from "../dao/mongo/cartDB.js";
import ProductDAO from "../dao/mongo/productDB.js";
const cartDB = new CartDAO();
const productDB = new ProductDAO();

export const createCart = async (products) => {
  try {
    const cart = await cartDB.create(products);
    return cart;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const productCart = async () => {
  try {
    const cart = await cartDB.find();
    if (cart) {
      return cart;
    } else {
      return "Empty Cart";
    }
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const addProductToCart = async (cidCart, pidProduct) => {
  //funciona, pero no suma
  try {
    const idCart = await cartDB.finOne({ _id: cidCart });
    if (!idCart) return "Cart Not Found";
    const idProduct = await productDB.findOne({ _id: pidProduct });
    if (!idProduct) return "Product Not Found";

    idCart.products.push({ product: idProduct });
    idCart.save();
    return idCart;
  } catch (e) {
    console.log(error.message);
    return error;
  }
};

export const updateProdOfCart = async (id, change) => {
  try {
    //busco el id del producto que viene del controller.
    const productChange = await cartDB.finOne(id);
    if (!productChange) return "Product not found";
    //retorno el cambio
    return await cartDB.update(change);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const deleteProdOfCart = async (id) => {
  try {
    const prodDelete = await cartDB.delete(id);
    return prodDelete;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
