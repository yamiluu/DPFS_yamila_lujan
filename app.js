const express = require('express');
const path = require('path');
const app = express(); // SOLO UNA VEZ
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;

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
const productsRouter = require('./routes/products.routes');
// const accesoriosRouter = require('./routes/accesorios');
// const carritoRouter = require('./routes/carrito');

const usersRouter = require('./routes/users.routes');
app.use('/users', usersRouter);

app.use('/products', productsRouter);
// app.use('/accesorios', accesoriosRouter);
// app.use('/carrito', carritoRouter);

module.exports = app;

//console.log('http://localhost:'+ port)
const db = require('./database/models');

app.listen(port, async()=>console.log(
  
 // await db.sequelize.sync({force: true}), 
 // console.log('All models were synchronized successfully'),
  
  "Servidor corriendo en el puerto: http://localhost:" + port
))

// Importar modelos

// const File = db.File;
// const User = db.User;