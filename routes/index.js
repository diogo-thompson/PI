
var express = require('express');
var router = express.Router();
var {login} = require ('../controllers/index');
/* GET home page. */
router.get('/', login);

module.exports = router;