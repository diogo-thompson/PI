module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("usuarios", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
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
        return queryInterface.dropTable("usuarios");
    },
};