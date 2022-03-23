const Sequelize = require('sequelize')
const database = require('../database/index')

const Plano = database.define('planos', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }

}, {
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Plano