import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart: {
    type: [
      {
        cartId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "cart",
        },
      },
    ],
    default: [],
  },
  role: {
    type: String,
    enum: ["admin", "user", "visit"],
    default: "user",
  },
});

userSchema.pre("findOne", function () {
  this.populate("cart.cartId");
});
const userModel = mongoose.model("user", userSchema);
export default userModel;
