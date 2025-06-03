/*const express = require('express');
const router = express.Router();*/

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Defino la RUTA PRINCIPAL:
router.get('/', homeController.index);

module.exports = router;