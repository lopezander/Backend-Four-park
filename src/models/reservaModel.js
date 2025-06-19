const pool = require("../config/database");
const { findById, findAll } = require("./usuarioModel");



module.exports = {


async createReservation  (reservation)  {
  const { correo_electronico, id_reserva, id_parqueadero, status, fecha_inicio, fecha_fin } = reservation;
  const query = `
    INSERT INTO reserva (correo_electronico, id_reserva, id_parqueadero, status, fecha_inicio, fecha_fin)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [correo_electronico, id_reserva, id_parqueadero, status, fecha_inicio, fecha_fin];
  const { rows } = await pool.query(query, values);
  return rows[0];
},

async findAll  ()  {
  const query = 'SELECT * FROM reserva;';
  const { rows } = await pool.query(query);
  return rows;
},

async findById (id)  {
  const query = 'SELECT * FROM reserva WHERE id_reserva = $1;';
  const values = [id];
  const { rows } = await pool.query(query, values);
  return rows[0];
},

async getPrice  (id_r)  {
    const query = `
      SELECT r.fecha_inicio, r.fecha_fin, p.precio_por_minuto
      FROM reserva r
      JOIN parqueadero p ON r.id_parqueadero = p.id_parqueadero
      WHERE r.id_reserva = $1;
    `;
    const values = [id_r];
    const { rows } = await pool.query(query, values);
    return rows[0];
    }, 

};