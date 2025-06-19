const pool = require('../config/database');

module.exports = {
    async create(factura) {
        const { correo_electronico, id_reserva, id_factura, hora_inicio, hora_fin, fecha_inicio, fecha_fin, precio } = factura;
        const result = await pool.query(
            'INSERT INTO factura (correo_electronico, id_reserva, id_factura, hora_inicio, hora_fin, fecha_inicio, fecha_fin, precio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [correo_electronico, id_reserva, id_factura, hora_inicio, hora_fin, fecha_inicio, fecha_fin, precio]
        );
        return result.rows[0];
    },

    async findAll() {
        const result = await pool.query('SELECT * FROM factura');
        return result.rows;
    },

    async findById(id) {
        const result = await pool.query('SELECT * FROM factura WHERE id_factura = $1', [id]);
        return result.rows[0];
    },

    async update(id, factura) {
        const {correo_electronico, id_reserva, hora_inicio, hora_fin, fecha_inicio, fecha_fin, precio} = factura;
        const result = await pool.query(
            'UPDATE factura SET correo_electronico = $1, id_reserva = $2, hora_inicio = $4, hora_fin = $5, fecha_inicio = $6, fecha_fin = $7, precio = $8 WHERE id_factura = $3 RETURNING *',
            [correo_electronico, id_reserva, id, hora_inicio, hora_fin, fecha_inicio, fecha_fin, precio]
        );
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query('DELETE FROM factura WHERE id_factura = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};
