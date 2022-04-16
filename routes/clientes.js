var express = require('express');
var router = express.Router();
var {cadastro, create, lista, deletarcliente} = require ('../controllers/clientes');
var Cliente = require('../models/Cliente');

router.get('/', cadastro);

router.post('/', create);

router.get('/lista', lista);

router.delete('/deletar/:id', deletarcliente);

module.exports = router;
