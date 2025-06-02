const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);            // Listar productos
router.get('/create', productController.create);     // Formulario de creación
router.post('/', productController.store);           // Guardar producto
router.get('/:id', productController.detail);        // Ver detalle
router.get('/:id/edit', productController.edit);     // Formulario edición
router.put('/:id', productController.update);        // Actualizar producto
router.delete('/:id', productController.destroy);    // Eliminar producto
router.get('/search', productController.search);     // Buscar productos

module.exports = router;
