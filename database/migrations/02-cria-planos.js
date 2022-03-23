module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("planos", {
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

            descricao: {
                type: Sequelize.STRING,
                allowNull: false
            },

            preco: {
                type: Sequelize.DECIMAL,
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
        return queryInterface.dropTable("planos");
    },
};