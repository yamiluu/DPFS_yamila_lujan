//var createError = require('http-errors');
const express = require('express');
const app = express();  //MUY IMPORTANTE.
const path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

//Configuración de la VISTA:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Ruta Principal (HOME):
app.get('/', (req, res) => {
  res.render('home'); // Renderiza la vista 'home.ejs'
});

//Carpeta ROUTES:
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const productsWRouter = require('./routes/productsW');
const productsHRouter = require('./routes/productsH');
const accesoriosRouter = require('./routes/accesorios');
const carritoRouter = require('./routes/carrito');

/*app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));*/

//Ruta principal por la cual app.js tiene que llamar al sistema de RUTEO. 
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/products/women', productsWRouter);
app.use('/products/men', productsHRouter);
app.use('/accesorios', accesoriosRouter);
app.use('/carrito', carritoRouter);

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

//Servidor:
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
