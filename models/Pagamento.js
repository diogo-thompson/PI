const Sequelize = require('sequelize')
const database = require('../database/index')

const Pagamento = database.define('Vendas', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

    datavenda: {
        type: Sequelize.DATE,
    }

}, {
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Pagamento