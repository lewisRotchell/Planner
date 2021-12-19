const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require('../middleware/auth')

const { registerSchema } = require("../middleware/userValidations");
const { loginSchema } = require("../middleware/userValidations");
const { validateUser } = require("../middleware/userValidations");

const { register, login, me } = authController;

router.route("/register").post(registerSchema, validateUser, register);
router.route("/login").post(loginSchema, validateUser, login);
router.route("/me").get(auth,me)

module.exports = router;
