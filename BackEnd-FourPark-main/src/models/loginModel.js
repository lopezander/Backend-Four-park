const pool = require("../config/database");

module.exports = {
  async findByCorreo(correo_electronico) {
    const result = await pool.query(
      "SELECT * FROM usuario WHERE correo_electronico = $1",
      [correo_electronico]
    );
    return result.rows[0];
  },

  async findrol(correo_electronico) {
    const result = await pool.query(
      "SELECT id_rol FROM usuario WHERE correo_electronico = $1",
      [correo_electronico]
    );
    return result.rows[0];
  },
};
