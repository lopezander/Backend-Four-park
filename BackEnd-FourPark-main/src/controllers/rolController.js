const Rol = require('../models/rolModel');



exports.getRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRol = async (req, res) => {
    try {            
        const rol = await Rol.findById(req.query.id);
        if (!rol) {
            return res.status(404).json({ message: 'Factura not found' });
        }
        res.status(200).json(rol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

