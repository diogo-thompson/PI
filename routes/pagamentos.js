
var express = require('express');
var router = express.Router();
var {pagamento} = require('../controllers/pagamentos');
/* GET users listing. */
router.get('/', pagamento);

module.exports = router;