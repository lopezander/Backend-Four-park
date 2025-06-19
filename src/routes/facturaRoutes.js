const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

router.post('/facturas', facturaController.createFactura);
router.get('/facturas', facturaController.getFacturas);
router.get('/factura', facturaController.getFactura);
router.put('/facturas', facturaController.updateFactura);
router.delete('/facturas', facturaController.deleteFactura);

module.exports = router;
