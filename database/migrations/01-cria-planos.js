module.exports= {
up: async(QueryInterface, Sequelize)=> {
    return QueryInterface.createTable ("planos",{
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

        create_at: {
            allowNull: false,
            type:SequelizeScopeError.DATE,
        },

        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
});

},

down: async(QueryInterface)=> {
    return QueryInterface.dropTable("planos");

    },
};
