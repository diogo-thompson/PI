const { Association } = require('sequelize')
const Sequelize = require('sequelize')
const database = require('../database/index')

const Cliente = database.define('clientes', {

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

    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    timestamps: true,
})

module.exports = Cliente