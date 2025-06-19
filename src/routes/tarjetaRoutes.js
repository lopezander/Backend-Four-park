const express = require("express");
const router = express.Router();
const tarjetaController = require("../controllers/tarjetaController");

router.post("/tarjetas", tarjetaController.createTarjeta);
router.get("/tarjetas", tarjetaController.getTarjetas);
router.get("/tarjeta", tarjetaController.getTarjeta);
router.put("/tarjetas", tarjetaController.updateTarjeta);
router.delete("/tarjetas", tarjetaController.deleteTarjeta);

module.exports = router;
