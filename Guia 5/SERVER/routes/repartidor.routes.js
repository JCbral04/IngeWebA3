const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Ruta de repartidores funcionando correctamente');
});

module.exports = router;
