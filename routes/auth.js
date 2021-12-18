const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const { register, login, me } = authController;

router.post("/register", register);
router.post("/login", login);
router.get("/", me);

module.exports = router;
