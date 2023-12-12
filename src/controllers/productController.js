import * as productService from "../services/productService.js";

export const postCreateProd = async (req, res) => {
  try {
    //Recibo el reqbody para crear un nuevo producto
    const data = req.body;
    const newProduct = await productService.createProduct(data);
    res.status(201).json({ status: "success", response: newProduct });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
export const getProductsPaginate = async (req, res) => {
  try {
    //logica para ver los productos paginados
    // const { limit = 10, page = 1, sort = 1 } = req.query;
    // const productsPag = await productService.productsPaginate.paginate(query, {
    //   limit,
    //   lean: true,
    //   page,
    //   sort: { price: +sort },
    // });

    const allProducts = await productService.productsPaginate();
    res.status(400).json({ status: "success", response: allProducts });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const putUpdateProduct = async (req, res) => {
  try {
    //recibo por params el id y por body el cambio
    const id = req.params;
    const { change } = req.body;

    //console.log(`este es el cambio: ${change} desde el controller/parametro`);

    let updateProduct = await productService.updateProduct(id, change);

    //console.log(`este es el cambio: ${change} desde el controller`);
    res.status(200).json({ status: "success", response: updateProduct });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    //recibo por params el id del producto a eliminar
    const { id } = req.params;

    let deleteProduct = await productService.deleteOneProduct(id);

    res.status(200).json({ status: "success", response: deleteProduct });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
