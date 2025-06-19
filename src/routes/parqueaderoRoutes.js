const express = require("express");
const router = express.Router();
const parqueaderoController = require("../controllers/parqueaderoController");

router.post("/parqueaderos", parqueaderoController.createParqueadero);
router.get("/parqueaderos", parqueaderoController.getParqueaderos);
router.get("/parqueaderos/:id", parqueaderoController.getParqueadero);
router.put("/parqueaderos/:id", parqueaderoController.updateParqueadero);
router.delete("/parqueaderos", parqueaderoController.deleteParqueadero);
router.get("/filtro", parqueaderoController.filtrarParqueadero )

module.exports = router;
