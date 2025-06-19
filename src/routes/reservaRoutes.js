const express = require('express');
const router = express.Router();
const reservaController= require('../controllers/reservaController');


router.post('/reserva', reservaController.createReservation);
router.get('/reservas', reservaController.getReservations);
router.get('/reserva', reservaController.getReservationById);
router.get('/reserva/price', reservaController.FinalPrice);


module.exports = router;