const express = require('express');
const path = require('path');
const app = express(); // SOLO UNA VEZ

const PORT = 3000;

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales
app.get('/', (req, res) => {
  res.render('home'); // Asegúrate de tener home.ejs
});

app.get('/detalle', (req, res) => {
  res.render('details'); // Asegúrate de tener details.ejs
});

app.get('/crear', (req, res) => {
  res.render('createProduct');
});

// Rutas de productos y otros
// const productsWRouter = require('./routes/productsW');
// const productsHRouter = require('./routes/productsH');
// const accesoriosRouter = require('./routes/accesorios');
// const carritoRouter = require('./routes/carrito');

// app.use('/products/women', productsWRouter);
// app.use('/products/men', productsHRouter);
// app.use('/accesorios', accesoriosRouter);
// app.use('/carrito', carritoRouter);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
