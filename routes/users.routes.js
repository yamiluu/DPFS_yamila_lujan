/* var express = require('express');
var router = express.Router(); */

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router; 
*/

const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.Controller.js');
router.get("/login", userController.login); //Formulario de Login.
router.get("/register", userController.register); //Formulario del Registro.

module.exports = router;