//aca va la logica de negocio, los mapeos, los switch y demas logica
import ProductDAO from "../dao/mongo/productDB.js";
const productDB = new ProductDAO();

export const createProduct = async (data) => {
  try {
    const product = await productDB.create(data);
    if (!product) return "Faltan datos para la creacion del producto";
    return product;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const productsPaginate = async () => {
  try {
    const allProducts = await productDB.find();
    return allProducts;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const updateProduct = async ({ id }, change) => {
  try {
    //console.log(`este es el cambio ${change} desde el service/parametro`);
    const oneChange = await productDB.update(id, change);
    if (!oneChange) return "Product not found for change";
    //console.log(`este es el cambio ${change} desde el service`);
    return oneChange;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteOneProduct = async (id) => {
  try {
    const oneProduct = await productDB.delete(id);

    if (oneProduct == id) return await productDB.delete(id);
    return "Product already removed";
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
