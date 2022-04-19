
var express = require('express');
var router = express.Router();
var {planos, criaplanos, create, deletarplano} = require('../controllers/planos');
var Plano = require('../models/Plano');


router.get('/', planos);

router.get('/criarplanos', criaplanos);

router.post('/', create);

router.delete('/deletar/:id', deletarplano);

module.exports = router;
