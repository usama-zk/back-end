const express = require("express");
const registerUser = require("../controllers/user.controller.js");
const Router = express.Router();
const upload = require("../middlewares/multer.middlewares.js");
Router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

module.exports = Router;
