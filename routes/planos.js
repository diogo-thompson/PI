
var express = require('express');
var router = express.Router();
var {planos} = require('../controllers/planos');
var Plano = require('../models/Plano');


router.get('/', planos);


module.exports = router;
