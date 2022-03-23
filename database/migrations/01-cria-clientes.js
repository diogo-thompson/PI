module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("clientes", {
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

            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("clientes");
    },
};