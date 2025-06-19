const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleadoController");

router.post("/empleado", empleadoController.registerEmployee);
router.get("/empleados", empleadoController.getEmployees);
router.get("/empleado", empleadoController.getEmployee);
router.put("/empleado", empleadoController.updateEmployee);
router.delete("/empleado", empleadoController.deleteEmployee);


module.exports = router;
