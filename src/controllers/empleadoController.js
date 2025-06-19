const Employee = require('../models/empleadoModel');

exports.registerEmployee = async (req, res) => {
  const { correo } = req.body;

  try {
    // Verifica si el correo electrónico ya existe
    const existingEmployee = await Employee.findById({ where: { correo } });
    if (existingEmployee) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    // Crea el nuevo empleado
    const newEmployee = await Employee.create(req.body);

    res.status(201).json({ message: 'Empleado registrado con éxito', employee: newEmployee });
  } catch (error) {
    console.error('Error al registrar el empleado:', error);
    res.status(500).json({ message: 'Error al registrar el empleado' });
  };
};

exports.getEmployees = async (req, res) => {
  try {
    const employee = await Employee.findAll();
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.query.id);
    
    if (!employee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.update(req.query.id, req.body);
    if (!employee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.delete(req.query.id);
    if (!employee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json({ message: "Empleado Eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


