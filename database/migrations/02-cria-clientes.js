module.exports= {
    up: async(QueryInterface, Sequelize)=> {
        return QueryInterface.createTable ("clientes",{
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
    
    down: async (QueryInterface)=> {
        return QueryInterface.dropTable("clientes");
    
        },
    };
    