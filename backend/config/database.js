const Sequelize = require('sequelize');

const connection = new Sequelize(
    'ecommerce_jhon_store',
    'root',
    '1030',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;