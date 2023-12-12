import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  thmbnail: {
    type: String,
  },
  code: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

productSchema.plugin(mongoosePaginate);
const productModel = mongoose.model("products", productSchema);
export default productModel;
