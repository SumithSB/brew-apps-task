const UsersModel = require("../../models/users");
const bcrypt = require("bcrypt");
const token = require("../middlewares/token")



authService = {};

authService.login = async (email, password) => {
  const user = await UsersModel.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const accessToken = token.createAccessToken(user._id);
      return {accessToken};
    }
    console.log("Incorrect password");
    return "Incorrect password";
  }
  console.log("Incorrect email");
  return "Incorrect email";
};

authService.findUserByUserIdAndUpdateDetails = async (
  userId,
  userDetails
) => {
  const user = await UsersModel.findOneAndUpdate(
    { _id: userId },
    userDetails,
    { upsert: true, new: true }
  );
  return user;
};

authService.findUserByUserIdAndUpdatePassword = async (
  userId,
  oldPassword,
  newPassword
) => {
  const user = await UsersModel.findOne({ _id: userId });
  if (user) {
    const auth = await bcrypt.compare(oldPassword, user.password);
    if (auth) {
      const salt = await bcrypt.genSalt();
      const updatedPassword = await bcrypt.hash(newPassword, salt);
      const userUpdated = await UsersModel.findOneAndUpdate({ _id: userId }, { password: updatedPassword }, { upsert: true, new: true });
      return "Password updated";
    }
    console.log("Incorrect password");
    return "Incorrect password";
  }
  console.log("User not found");
  return "User not found";
};




module.exports = authService;