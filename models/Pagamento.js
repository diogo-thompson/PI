const Sequelize = require('sequelize')
const database = require('../database/index')

const Pagamento = database.define('pagamentos', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nomecartao: {
        type: Sequelize.STRING,
       
    },

    numerocartao: {
        type: Sequelize.STRING,
        
    },

    vencimentocartao: {
        type: Sequelize.STRING,
        
    },

    cvv: {
        type: Sequelize.STRING,
       
    },

    plano_id: {
        type: Sequelize.STRING

    },

    cliente_id: {
        type: Sequelize.STRING

    },

create_at: {
    allowNull: false,
    type:SequelizeScopeError.DATE,
},

updated_at: {
    allowNull: false,
    type: Sequelize.DATE,
},

}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
})

module.exports = Pagamento