const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/roles',rolController.getRoles);
router.get('/rol', rolController.getRol);


module.exports = router;
