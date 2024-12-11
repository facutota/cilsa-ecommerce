const express = require('express');
const cors = require('cors'); 
const pool = require('./config/db'); 
const productRoutes = require('../src/routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());


// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de productos
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes); 


// Probar la conexión a la base de datos
pool.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch(err => console.error('Error al conectar a la base de datos', err));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});