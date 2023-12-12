import productModel from "../../schemas/productSchema.js";

export default class ProductDAO {
  constructor() {}
  find = async () => {
    try {
      return await productModel.find();
    } catch (error) {
      console.log(error.message);
    }
  };

  findOne = async (id) => {
    try {
      return await productModel.findById({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  create = async (data) => {
    try {
      let newProduct = await productModel.create(data);
      return newProduct;
    } catch (error) {
      console.log(error.message);
    }
  };

  update = async (id, change) => {
    try {
      //console.log(`Este es el cambio: ${change} desde el DB`);
      let updateProp = await productModel.findByIdAndUpdate(
        { _id: id },
        { change },
        { new: true }
      );
      return updateProp;
    } catch (error) {
      console.log(error.message);
    }
  };

  delete = async (id) => {
    try {
      let deleteProduct = await productModel.findOneAndDelete(id);

      return deleteProduct;
    } catch (error) {
      console.log(error.message);
    }
  };
}
