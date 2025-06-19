const Parqueadero = require("../models/parqueaderoModel");

exports.createParqueadero = async (req, res) => {
  try {
    const parqueadero = await Parqueadero.create(req.body);
    res.status(201).json(parqueadero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getParqueaderos = async (req, res) => {
  try {
    const parqueaderos = await Parqueadero.findAll();
    res.status(200).json(parqueaderos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getParqueadero = async (req, res) => {
  try {
    const parqueadero = await Parqueadero.findById(req.params.id);
    if (!parqueadero) {
      return res.status(404).json({ message: "Parqueadero not found" });
    }
    res.status(200).json(parqueadero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateParqueadero = async (req, res) => {
  try {
    const parqueadero = await Parqueadero.update(req.params.id, req.body);
    if (!parqueadero) {
      return res.status(404).json({ message: "Parqueadero not found" });
    }
    res.status(200).json(parqueadero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteParqueadero = async (req, res) => {
  try {
      const parqueadero = await Parqueadero.delete(req.query.id);
      if (!parqueadero) {
          return res.status(404).json({ message: 'parqueadero not found' });
      }
      res.status(200).json({ message: 'parqueadero deleted' });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

exports.filtrarParqueadero = async (req, res) => {
  try {
      const parqueadero = await Parqueadero.filtro(req.query.city);
      if (!parqueadero) {
          return res.status(404).json({ message: 'parqueadero not found' });
      }
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};