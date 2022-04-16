module.exports= {
    up: (QueryInterface, Sequelize)=> {
        return QueryInterface.bulkInsert ("clientes",[{
           nome: "Gisele Tomazini",
           cpf: "10535937345",
           email: "gisele_tomazini@gmail.com",
           senha: "123456",
           created_at: new Date(),
           updated_at: new Date()

    }]);
    
    },
    
    down: (QueryInterface, Sequelize)=> {
        return QueryInterface.bulkDelete("clientes", null, {});
    
        }
    };
    