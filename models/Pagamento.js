const Sequelize = require('sequelize')
const database = require('../database/index')

const Pagamento = database.define('Vendas', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    datavenda: {
        type: Sequelize.DATE,
    }

}, {
    timestamps: true,
})

module.exports = Pagamento