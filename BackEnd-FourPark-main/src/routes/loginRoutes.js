const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/loginCliente", loginController.loginCliente);
//router.get('/loginGerente', loginController.loginGerente);

module.exports = router;
