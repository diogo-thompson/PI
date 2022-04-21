const Plano = require("../models/Plano")

async function planos(req, res, next) {
  const resultado = await Plano.findAll( );
  res.render('planos.ejs', {status:" ", listaplanos: resultado})
} 

function criaplanos(req, res, next) {
  res.render('criaplanos.ejs')
} 


  async function create(req, res, next) {
    const {nome, descricao, valor} = req.body;
    console.log(nome, descricao, valor);
    const resultado = await Plano.create({
      nome, descricao, valor, 
    });

    const listaplanos = await Plano.findAll( );
    res.render("planos.ejs", {status: "Sucesso", listaplanos:listaplanos})
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
    deletarplano,
    criaplanos
  }