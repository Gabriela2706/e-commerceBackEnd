import cartModel from "../../schemas/cartSchema.js";

export default class CartDAO {
  constructor() {}

  find = async () => {
    try {
      return await cartModel.find();
    } catch (error) {
      console.log(error.message);
    }
  };

  finOne = async ({ _id: id }) => {
    try {
      return await cartModel.findOne({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  create = async (data) => {
    try {
      let newCart = await cartModel.create(data);
      return newCart;
    } catch (error) {
      console.log(error.message);
    }
  };

  update = async (id, change) => {
    try {
      let newUpdate = await cartModel.findByIdAndUpdate(
        { _id: id },
        { change },
        { new: true }
      );
      return newUpdate;
    } catch (error) {
      console.log(error.message);
    }
  };

  delete = async (id) => {
    try {
      let deleteOneProduct = await cartModel.findOneAndDelete({ _id: id });
      return deleteOneProduct;
    } catch (error) {
      console.log(error.message);
    }
  };
}
