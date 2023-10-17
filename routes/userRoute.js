const express = require("express");
const { register, login, current } = require("../controller/userController");
const validateToken = require("../middleware/validateTokenMiddleware");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/current", validateToken, current);

module.exports = router;
