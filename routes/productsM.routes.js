let express = require('express');
let router = express.Router();

//LAS RUTAS: 
router.get('/', function(req, res) {
    return res.send("Aca, van todos los productos de Hombre.");
  });

router.get("/id/:id", function(req, res) {
  return res.send("Estamos en el detalle de los productos de Hombre: " + req.params.id)
})

router.get("/id/:id/comments/:id?", function(req, res) {
  return res.send("Estamos en el detalle de los productos de Hombre: " + req.params.id + ". La pelicula tiene comentarios: " + req.params.commetsId)
})

module.exports = router;

