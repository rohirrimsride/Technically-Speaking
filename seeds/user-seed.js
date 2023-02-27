const { User } = require('../model');

const userData = [
    {
        username: 'techtonic',
        email: 'techtonic@shiftingstates.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    },
    {
        username: 'henryVIII',
        email: 'tudors4ever@80smail.com',
        password: 'Password1234'
    },
    {
        username: 'WurdyBurdy',
        email: 'highflyer@overthemoon.com',
        password: '$2b$12$Jmn3i0ZvdH/mpYOtPcnxPu80/OLUXRc.PLSMMUC4tHN06eDiYcEQy'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;