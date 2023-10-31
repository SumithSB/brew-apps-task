const express = require("express");
const token = require("../middlewares/token");
const authService = require("../services/auth_service");
const UsersModel = require("../../models/users");
const responsemodel = require("../../models/response");
const loginValidation = require("../middlewares/validators");


const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const user = new UsersModel({ name, email, phone, password });
  user.save().then((response) => {
    res.status(200).send(responsemodel.model1({ userId: response._id, message: "User registered successfully!" }, "SUCCESS"));
  }).catch((error) => {
    res.send({ error })
  });

});

router.post("/login", (req, res) => {
  authService.login(req.body.email, req.body.password).then((response) => {
    res.status(200).send(responsemodel.model1(response, "Success"));
  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});

router.post("/passwordChange", token.validation, (req, res) => {
  let userId = req.tokenpayload.userId;
  let { oldPassword, newPassword } = req.body;

  authService.findUserByUserIdAndUpdatePassword(userId, oldPassword, newPassword).then((response) => {
    res.status(200).send(responsemodel.model1(response, "Success"));
  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});









module.exports = router;
