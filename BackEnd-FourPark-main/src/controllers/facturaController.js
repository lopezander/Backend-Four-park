const Factura = require('../models/facturaModel');

exports.createFactura = async (req, res) => {
    try {
        const factura = await Factura.create(req.body);
        res.status(201).json(factura);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.findAll();
        res.status(200).json(facturas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFactura = async (req, res) => {
    try {            
        const factura = await Factura.findById(req.query.id);
        if (!factura) {
            return res.status(404).json({ message: 'Factura not found' });
        }
        res.status(200).json(factura);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateFactura = async (req, res) => {
    try {
        const factura = await Factura.update(req.query.id, req.body);
        if (!factura) {
            return res.status(404).json({ message: 'factura not found' });
        }
        res.status(200).json(factura);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.delete(req.query.id);
        if (!factura) {
            return res.status(404).json({ message: 'factura not found' });
        }
        res.status(200).json({ message: 'factura deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
