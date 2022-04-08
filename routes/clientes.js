var express = require('express');
var router = express.Router();
var {cadastro, create, lista} = require ('../controllers/clientes');
var Cliente = require('../models/Cliente');

router.get('/', cadastro);

router.post('/', create);

router.get('/lista', lista);

module.exports = router;
