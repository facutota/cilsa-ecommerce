const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

// Agregar más rutas según sea necesario

module.exports = router;