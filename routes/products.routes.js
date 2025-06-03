const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.Controller.js');

// router.get('/', productController.index);            // Listar productos
router.get('/create', productController.create);     // Formulario de creación
router.post('/create', productController.uploadProduct);   // Guardar producto
//router.get('/:id', productController.detail);        // Ver detalle
//router.get('/:id/edit', productController.edit);     // Formulario edición
//router.put('/:id', productController.update);        // Actualizar producto
//router.delete('/:id', productController.destroy);    // Eliminar producto
//router.get('/search', productController.search);     // Buscar productos

module.exports = router;
