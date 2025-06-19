const Tarjeta = require("../models/tarjetaModel");

exports.createTarjeta = async (req, res) => {
  try {
    const tarjeta = await Tarjeta.create(req.body);
    res.status(201).json(tarjeta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTarjetas = async (req, res) => {
  try {
    const tarjetas = await Tarjeta.findAll();
    res.status(200).json(tarjetas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTarjeta = async (req, res) => {
  try {
    const tarjeta = await Tarjeta.findById(req.params.id);
    if (!tarjeta) {
      return res.status(404).json({ message: "Tarjeta not found" });
    }
    res.status(200).json(tarjeta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTarjeta = async (req, res) => {
  try {
    const tarjeta = await Tarjeta.update(req.params.id, req.body);
    if (!tarjeta) {
      return res.status(404).json({ message: "Tarjeta not found" });
    }
    res.status(200).json(tarjeta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTarjeta = async (req, res) => {
  try {
    const tarjeta = await Tarjeta.delete(req.params.id);
    if (!tarjeta) {
      return res.status(404).json({ message: "Tarjeta not found" });
    }
    res.status(200).json({ message: "Tarjeta deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
