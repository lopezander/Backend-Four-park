const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/pdf', reportController.generatePDFReport);
router.get('/excel', reportController.generateExcelReport);
router.get('/preview', reportController.previewReport);

module.exports = router;