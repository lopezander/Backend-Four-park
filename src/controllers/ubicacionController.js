const Ubicacion = require('../models/ubicacionModel');

exports.createUbicacion= async (req, res) => {
    try {
        const ubicacion = await Ubicacion.create(req.body);
        res.status(201).json(ubicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUbicaciones= async (req, res) => {
    try {
        const usuarios = await Ubicacion.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUbicacion = async (req, res) => {
    try {            
        const ubicacion = await Ubicacion.findById(req.query.id);
        if (!ubicacion) {
            return res.status(404).json({ message: 'ubicacion not found' });
        }
        res.status(200).json(ubicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUbicacion= async (req, res) => {
    try {
        const ubicacion = await Ubicacion.update(req.query.id, req.body);
        if (!ubicacion) {
            return res.status(404).json({ message: 'ubicacion not found' });
        }
        res.status(200).json(ubicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUbicacion = async (req, res) => {
    try {
        const ubicacion = await Ubicacion.delete(req.query.id);
        if (!ubicacion) {
            return res.status(404).json({ message: 'ubicacion not found' });
        }
        res.status(200).json({ message: 'ubicacion deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};