let express = require('express');
let router = express.Router();

//LAS RUTAS: 
router.get('/', function(req, res) {
    return res.send("Aca, van todos los productos de Mujer.");
  });
  

module.exports = router;