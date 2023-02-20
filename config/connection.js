require('dotenv').config();

// const { createClient } = require('@supabase/supabase-js');
const Sequelize = require('sequelize');

let sequelize;

// This is for the Heroku setup commenting out until I figure out the Vercel/Supabase setup 
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);

// This is for the RENDER POSTGRESSQL setup
// if (process.env.RENDER_URL) {
//     sequelize = new Sequelize(process.env.RENDER_URL);


// Supabase database setup and access
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey)

// if (supabase) {
//     sequelize = new Sequelize(supabase);

// console.log('Supabase Instance: ', supabase);

} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;