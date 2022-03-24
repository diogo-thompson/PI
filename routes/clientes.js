
var express = require('express');
const { route } = require('.');
var router = express.Router();
var {cadastro, create, lista, update, destroy } = require ('../controllers/clientes');

//CLIENTES

router.get('/', cadastro);

router.post('/', create);

router.get('/lista', lista);

router.put('/alterar/:id', update);

router.delete('/deletar/:id', destroy)


module.exports = router;