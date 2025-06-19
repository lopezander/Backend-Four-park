
const usuario = require('../models/usuarioModel'); 
const Reserva = require('../models/reservaModel');

exports.createReservation = async (req, res) => {
  const { correo_electronico, fecha_reserva, id_parqueadero, status, fecha_inicio, fecha_fin } = req.body;

  try {
    // Verifica si el correo electrónico existe en la tabla usuarios
    const user = await usuario.findById({ where: { correo_electronico } });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Crea la nueva reserva
    const newReservation = await Reserva.createReservation({
      correo_electronico,
      fecha_reserva,
      id_parqueadero,
      status,
      fecha_inicio,
      fecha_fin,
    });

    res.status(201).json({ message: 'Reserva creada con éxito', reservation: newReservation });
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    res.status(500).json({ message: 'Error al crear la reserva' });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reserva.findAll();
    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
};

exports.getReservationById = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reserva.findById(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }

    res.status(200).json(reservation);
  } catch (error) {
    console.error('Error al obtener la reserva:', error);
    res.status(500).json({ message: 'Error al obtener la reserva' });
  }
};

exports.FinalPrice = async (req, res) => {
    const { id_reserva } = req.params;
  
    try {
      const reservation = await Reserva.getPrice(id_reserva);
  
      if (!reservation) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
  
      const { fecha_inicio, fecha_fin, precio_por_minuto } = reservation;
  
      const startTime = new Date(fecha_inicio);
      const endTime = new Date(fecha_fin);
  
      const durationInMinutes = Math.floor((endTime - startTime) / (1000 * 60));
      const finalPrice = durationInMinutes * precio_por_minuto;
  
      res.status(200).json({ finalPrice });
    } catch (error) {
      console.error('Error al calcular el precio final:', error);
      res.status(500).json({ message: 'Error al calcular el precio final' });
    }
  };