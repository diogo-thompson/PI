const Cliente = require("../models/Cliente")

function cadastro(req, res, next) {
    res.render('clientes.ejs')
  } 

async function create(req, res, next) {
  const {nome, cpf, email, senha } = req.body;
  const resultado = await Cliente.create({
    nome, cpf, email, senha
  });
  res.send(resultado);
}

async function lista(req, res, next) {
  const resultado = await Cliente.findAll();
  res.send(resultado);
}

async function update(req,res,next) {
  const id = req.params.id
  try{
    const retornoDoUpdate = await Cliente.update(req.body, {
      where: { id: id } })

      return res.json(retornoDoUpdate)
  } catch (error) {
      return res.json({ message: error.message })
  }
}

async function destroy(req,res,next) {
  const id = req.params.id
  try{
    const retornoDoDestroy = await Cliente.destroy
    ({ where: { id: id } })

      return res.json(retornoDoDestroy)
  } catch (error) {
      return res.json({ message: error.message })
  }
}

  module.exports = {
    cadastro,
    create,
    lista,
    update,
    destroy
  }