
var express = require('express');
var router = express.Router();
var {pagamento, create, listarpagamentos} = require('../controllers/pagamentos');
/* GET users listing. */

router.get('/', pagamento);

router.post('/', create)

router.get('/lista', listarpagamentos);

module.exports = router;