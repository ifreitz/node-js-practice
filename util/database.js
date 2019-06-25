const Sequelize = require('sequelize');

const sequilize = new Sequelize('node-complete', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    // storage: './database.sqlite'
});

module.exports = sequilize;