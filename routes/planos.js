
var express = require('express');
var router = express.Router();
var {plano} = require('../controllers/planos');

/* GET users listing. */
router.get('/', plano);  

module.exports = router;