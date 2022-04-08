const Plano = require("../models/Plano")

function planos(req, res, next) {
  res.render('planos.ejs')
} 

async function buscaplanos (req, res, next) {
    const resultado = await Plano.findAll( );
    res.send('resultado');

 
  }
 


  module.exports = {
    planos
  }