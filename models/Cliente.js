const Sequelize = require('sequelize')
const database = require('../database/index')

const Cliente = database.define('clientes', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
       
    },

    cpf: {
        type: Sequelize.STRING,
        
    },

    email: {
        type: Sequelize.STRING,
        
    },

    senha: {
        type: Sequelize.STRING,
       
    },

    plano_id: {
        type: Sequelize.STRING

    },

}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente