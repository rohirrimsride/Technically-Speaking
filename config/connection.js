require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        
    }
});