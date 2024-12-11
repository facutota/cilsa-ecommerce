const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener todos los productos
router.get('/', async (req, res) => {
  const { tipo } = req.query; // Obtiene el tipo de la consulta
  try {
    const query = tipo ? 'SELECT * FROM products WHERE tipo = $1' : 'SELECT * FROM products';
    const values = tipo ? [tipo] : [];
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).send('Error en el servidor');
  }
});

router.get('/random', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY RANDOM() LIMIT 5'); // Obtiene 5 productos aleatorios
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener productos aleatorios:', err);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;