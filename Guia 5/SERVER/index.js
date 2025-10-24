require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/paquetes', require('./routes/paquetes.routes')); // Rutas de paquetes
app.use('/api/repartidores', require('./routes/repartidor.routes')); // Rutas de repartidores

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => console.log(` Servidor corriendo en el puerto ${PORT}`));
