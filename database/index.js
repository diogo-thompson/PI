const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco_pi', 'root', '', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;