const express = require('express');
const pool = require('../config/db'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

// Obtener el carrito (sin usuario)
router.get('/', async (req, res) => {
  try {
    const cartItems = await pool.query('SELECT * FROM cart_items');
    res.json(cartItems.rows);
  } catch (err) {
    console.error('Error al obtener el carrito:', err);
    res.status(500).send('Error en el servidor');
  }
});

// Agregar un producto al carrito
router.post('/items', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Crear un carrito si no existe
    const cart = await pool.query('SELECT * FROM carts LIMIT 1');
    let cartId = cart.rows.length > 0 ? cart.rows[0].id : null;

    if (!cartId) {
      const newCart = await pool.query('INSERT INTO carts DEFAULT VALUES RETURNING id');
      cartId = newCart.rows[0].id;
    }

    // Agregar el producto al carrito
    await pool.query('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3)', [cartId, productId, quantity]);
    res.status(201).send('Producto agregado al carrito');
  } catch (err) {
    console.error('Error al agregar producto al carrito:', err);
    res.status(500).send('Error en el servidor');
  }
});

// Eliminar un producto del carrito
router.delete('/items/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    await pool.query('DELETE FROM cart_items WHERE id = $1', [itemId]);
    res.send('Producto eliminado del carrito');
  } catch (err) {
    console.error('Error al eliminar producto del carrito:', err);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;