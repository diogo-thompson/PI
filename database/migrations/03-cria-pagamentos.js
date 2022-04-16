module.exports= {
    up: async(QueryInterface, Sequelize)=> {
        return QueryInterface.createTable ("pagamentos",{
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
            type:Sequelize.DATE,
        },

        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        
    });
    
    },
    
    down: async (QueryInterface)=> {
        return QueryInterface.dropTable("pagamentos");
    
        },
    };
    