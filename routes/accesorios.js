let express = require('express');
let router = express.Router();

//LAS RUTAS: 
router.get('/', function(req, res) {
    return res.send("Aca, van todos los accesorios.");
  });
  

module.exports = router;