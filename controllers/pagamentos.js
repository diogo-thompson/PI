
function pagamento(req, res, next) {
    res.render('pagamentos.ejs')
  }  

  async function create(req, res, next) {
    const {nomecartao, numerocartao, vencimentocartao, cvv, plano_id, cliente_id} = req.body;
    const resultado = await Pagamento.create({
      nomecartao, numerocartao, vencimentocartao, cvv, plano_id, cliente_id
    });
    res.json(resultado);
  }

  async function listarpagamentos (req, res, next) {
    const resultado = await Pagamento.findAll( );
  res.json(resultado);
  
  }


  module.exports = {
    pagamento,
    create,
    listarpagamentos
  }