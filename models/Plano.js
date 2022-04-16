const Sequelize = require('sequelize')
const database = require('../database/index')

const Plano = database.define('planos', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
       
    },

    descricao: {
        type: Sequelize.STRING,
        
    },

    valor: {
        type: Sequelize.STRING,
        
    },

}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
})

module.exports = Plano