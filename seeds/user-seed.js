const { User } = require('../model');

const userData = [
    {
        username: 'johnny5isAlive',
        email: 'johnny5isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny6isAlive',
        email: 'johnny6isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny7isAlive',
        email: 'johnny7isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny8isAlive',
        email: 'johnny8isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny9isAlive',
        email: 'johnny9isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny10isAlive',
        email: 'johnny10isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnn11isAlive',
        email: 'johnny11isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny12isAlive',
        email: 'johnny12isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny13isAlive',
        email: 'johnny13isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'johnny22isAlive',
        email: 'johnny22isAlive@80smail.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;