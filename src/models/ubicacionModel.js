const pool = require('../config/database');

module.exports = {
    async create(ubicacion) {
        const { idciudad, ciudad, direccion} = ubicacion;
        const result = await pool.query(
            'INSERT INTO ubicacion ( idciudad, ciudad, direccion) VALUES ($1, $2, $3) RETURNING *',
            [ idciudad, ciudad, direccion]
        );
        return result.rows[0];
    },

    async findAll() {
        const result = await pool.query('SELECT * FROM ubicacion');
        return result.rows;
    },

    async findById(ubicacion) {
        const {idciudad} = ubicacion;
        const result = await pool.query('SELECT * FROM ubicacion WHERE idciudad = $1', [idciudad]);
        return result.rows[0];
    },

    async update(id, ubicacion) {
        const { ciudad, direccion} = ubicacion;
        const result = await pool.query(
            'UPDATE ubicacion SET ciudad = $2, direccion= $3 WHERE idciudad = $1 RETURNING *',
            [id, ciudad, direccion]
        );
        return result.rows[0];
    },

    async delete(id) {
        const {idciudad} = id;
        const result = await pool.query('DELETE FROM ubicacion WHERE idciudad  = $1 RETURNING *', [idciudad]);
        return result.rows[0];
    }
};


