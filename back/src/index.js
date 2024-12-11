const express = require('express');
const pool = require('./config/db'); // Asegúrate de que la ruta sea correcta
const productRoutes = require('../src/routes/productsRoutes'); // Importa las rutas de productos
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de productos
app.use('/api/products', productRoutes);

// Probar la conexión a la base de datos
pool.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch(err => console.error('Error al conectar a la base de datos', err));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});