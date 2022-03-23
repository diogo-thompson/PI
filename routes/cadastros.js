
var express = require('express');
var router = express.Router();
var {cadastro} = require ('../controllers/cadastros');
/* GET home page. */
router.get('/', cadastro);

module.exports = router;