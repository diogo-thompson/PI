const Plano = require("../models/Plano")

function planos(req, res, next) {
  res.render('planos.ejs')
} 

  async function create(req, res, next) {
    const {nome, descricao, valor} = req.body;
    const resultado = await Pagamento.create({
      nome, descricao, valor
    });

    res.json(resultado);
  }

  async function deletarplano(req, res, next) {
    const id = req.params.id
    try {
        const retornoDoDelete = await Plano.destroy({ where: { id: id } })
        return res.json(retornoDoDelete)
    } catch (error) {
        return res.json({ message: error.message })
    }

}

  module.exports = {
    planos, 
    create,
    deletarplano
  }