const { User } = require('../model');

const userData = [
    {
        username: 'johnny5isAlive',
        email: 'johnny5isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny6isAlive',
        email: 'johnny6isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny7isAlive',
        email: 'johnny7isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny8isAlive',
        email: 'johnny8isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny9isAlive',
        email: 'johnny9isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny10isAlive',
        email: 'johnny10isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnn11isAlive',
        email: 'johnny11isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny12isAlive',
        email: 'johnny12isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny13isAlive',
        email: 'johnny13isAlive@80smail.com',
        password: '!password123'
    },
    {
        username: 'johnny22isAlive',
        email: 'johnny22isAlive@80smail.com',
        password: '!password123'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;