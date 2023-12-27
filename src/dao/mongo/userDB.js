import userModel from "../../schemas/userSchema.js";

export default class UserDAO {
  constructor() {}
  find = async () => {
    try {
      return await userModel.find();
    } catch (error) {
      console.log(error.message);
    }
  };

  findId = async (id) => {
    try {
      return await userModel.findById(id);
    } catch (error) {
      console.log(error.message);
    }
  };
  findOne = async (email) => {
    try {
      return await userModel.findOne({ email: email });
    } catch (error) {
      console.log(error.message);
    }
  };
  create = async (data) => {
    try {
      let newUser = await userModel.create(data);
      return newUser;
    } catch (error) {
      console.log(error.message);
    }
  };

  update = async (id, change) => {
    try {
      let updateUser = await userModel.findByIdAndUpdate(
        { _id: id },
        { change },
        { new: true }
      );
      return updateUser;
    } catch (error) {
      console.log(error.message);
    }
  };

  delete = async (id) => {
    try {
      let deleteUser = await userModel.findByIdAndDelete({ _id: id });
      return deleteUser;
    } catch (error) {
      console.log(error.message);
    }
  };
}
