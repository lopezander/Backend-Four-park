const pool = require('../config/database');

module.exports = {


    async findAll() {
        const result = await pool.query('SELECT * FROM rol');
        return result.rows;
    },

    async findById(id) {
        const result = await pool.query('SELECT * FROM rol WHERE id_rol = $1', [id]);
        return result.rows[0];
    },
 
};
