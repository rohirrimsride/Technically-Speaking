const seedUser = require('./user-seed');
const seedPost = require('./post-seed');
const seedComment = require('./comment-seed');



const sequelize = require('../config/connection');

const seedTables = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------DATABASED SYNCED------\n');
    await seedUser();
    console.log('\n------USER TABLE SEEDED------\n');
    await seedPost();
    console.log('\n------POST TABLE SEEDED------\n');
    await seedComment();
    console.log('\n------COMMENT TABLE SEEDED------\n');
   
    

    process.exit(0);
};

seedTables();