
var express = require('express');
var router = express.Router();
var {pagamento, create, listar} = require('../controllers/pagamentos');
/* GET users listing. */

router.get('/', pagamento);

router.post('/', create)

router.get('/lista', listar);

module.exports = router;