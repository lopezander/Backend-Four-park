const pool = require("../config/database");

module.exports = {
  async create(tarjeta) {
    const { num_tarjeta, correo_electronico, titular, codigo, fecha_exp } =
      tarjeta;
    const result = await pool.query(
      "INSERT INTO tarjeta_credito (num_tarjeta, correo_electronico, titular, codigo, fecha_exp) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [num_tarjeta, correo_electronico, titular, codigo, fecha_exp]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query("SELECT * FROM tarjeta_credito");
    return result.rows;
  },

  async findById(id) {
    const result = await pool.query(
      "SELECT * FROM tarjeta_credito WHERE codigo = $1",
      [id]
    );
    return result.rows[0];
  },

  async update(id, tarjeta) {
    const { numero, fechaExpiracion, cvv, titular } = tarjeta;
    const result = await pool.query(
      "UPDATE tarjeta_credito SET num_tarjeta = $1, fecha_exp = $5, codigo = $4, titular = $3 WHERE codigo = $4 RETURNING *",
      [id, numero, fechaExpiracion, cvv, titular]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM tarjeta_credito WHERE codigo = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  },
};
