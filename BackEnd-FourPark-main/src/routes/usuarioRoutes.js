const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/usuarios", usuarioController.createUsuario);
router.get("/usuarios", usuarioController.getUsuarios);
router.get("/usuario", usuarioController.getUsuario);
router.put("/usuarios", usuarioController.updateUsuario);
router.delete("/usuarios", usuarioController.deleteUsuario);
router.post("/login", usuarioController.loginUsuario);

module.exports = router;
