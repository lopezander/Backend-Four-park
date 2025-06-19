const express = require("express");
const bodyParser = require("body-parser");
const facturaRoutes = require("./src/routes/facturaRoutes");
const parqueaderoRoutes = require("./src/routes/parqueaderoRoutes");
const rolRoutes = require("./src/routes/rolRoutes");
const usuarioRoutes = require("./src/routes/usuarioRoutes");
const cors = require("cors");
const tarjetaRoutes = require("./src/routes/tarjetaRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const reportRoutes = require('./src/routes/reportRoutes');
const ubicacionRoutes = require('./src/routes/ubicacionRoutes');
const empleadoRoutes = require('./src/routes/empleadoRoutes');
const reservaRoutes = require('./src/routes/reservaRoutes');
const path = require('path');

const app = express(); // Inicializamos express aquí

require("dotenv").config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", facturaRoutes);
app.use("/api", parqueaderoRoutes);
app.use("/api", rolRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", tarjetaRoutes);
app.use("/api", loginRoutes);
app.use('/reports',reportRoutes);
app.use ("/api",  ubicacionRoutes);
app.use ("/api",  empleadoRoutes);
app.use ("/api",  reservaRoutes);


app.use(express.static(path.join(__dirname, '../frontend-repo/public')));
// Usar las rutas de reportes
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
