const { check } = require('express-validator');

const loginCheck = [
    check('email')
    .notEmpty().withMessage('Debes ingresar un Email')
    .isEmail().withMessage('Debes ingresar un Email valido').bail(),
    check('password').notEmpty().withMessage('Debes ingresar un Password').bail()
];

const registerCheck = [
    check('name')
    .notEmpty().withMessage('Debes ingresar tu nombre'),
    check('lastname')
    .notEmpty().withMessage('Debes ingresar tu apellido'),
    check('email')
    .notEmpty().withMessage('Debes ingresar un email')
    .isEmail().withMessage('Debes ingresar un Email valido').bail(),
    check('password')
    .notEmpty().withMessage('Debes ingresar un password')
    .isLength({min: 6}).withMessage('Debe tener al menos 6 caracteres').bail(),
];

const editUserCheck = [
    check('name')
    .notEmpty().withMessage('Debes ingresar tu nombre'),
    check('lastname')
    .notEmpty().withMessage('Debes ingresar tu apellido'),
    check('email')
    .notEmpty().withMessage('Debes ingresar un email')
    .isEmail().withMessage('Debes ingresar un Email valido').bail(),
    check('password')
    .notEmpty().withMessage('Debes ingresar un password')
    .isLength({min: 6}).withMessage('Debe tener al menos 6 caracteres').bail(),
];

const createCheck = [
    check('name')
        .notEmpty().withMessage('Ingresa el nombre de tu modelo'),
    check('description')
        .notEmpty().withMessage('Ingresa una descripcion'),
    check('price')
        .notEmpty().withMessage('Ingrese un precio')
        .isNumeric().withMessage('Debes ingresar un numero').bail(),
    check('category')
        .notEmpty().withMessage('Debes seleccionar una opcion'),
    check('talle')
        .notEmpty().withMessage('Debes seleccionar un talle'),
    // Puedes agregar validación para imagen si lo deseas
];

const editProductCheck = [
    check('name')
    .notEmpty().withMessage('Ingresa el nombre de tu modelo'),
    check('description')
    .notEmpty().withMessage('Ingresa una descripcion'),
    check('price')
    .notEmpty().withMessage('Ingrese un precio')
    .isNumeric().withMessage('Debes ingresar un numero').bail(),
    check('category')
    .notEmpty().withMessage('Debes seleccionar una opcion'),
];

module.exports = {loginCheck, registerCheck, createCheck, editProductCheck, editUserCheck};