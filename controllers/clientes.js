const Cliente = require("../models/Cliente")

function cadastro(req, res, next) {
  res.render('clientes.ejs')
} 

async function lista (req, res, next) {
    const resultado = await Cliente.findAll( );
  res.json(resultado);
  
  }

   async function create(req, res, next) {
    const {nome, cpf, email, senha, plano_id } = req.body;
    const resultado = await Cliente.create({
      nome, cpf, email, senha, plano_id
    });
    res.json(resultado);
  }


  module.exports = {
    cadastro,
    lista,
    create

  }