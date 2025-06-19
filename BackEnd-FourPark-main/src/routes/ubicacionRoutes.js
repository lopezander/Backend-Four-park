
const express = require("express");
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');

router.post('/ubicaciones', ubicacionController.createUbicacion);
router.get('/ubicaciones', ubicacionController.getUbicaciones);
router.get('/ubicacion', ubicacionController.getUbicacion);
router.put('/ubicaciones', ubicacionController.updateUbicacion);
router.delete('/ubicaciones', ubicacionController.deleteUbicacion);

module.exports = router;