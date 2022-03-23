module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('clientes', [{
            email: 'admin@pi.com',
            senha: '123456',
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('clientes', null, {});
    }
};