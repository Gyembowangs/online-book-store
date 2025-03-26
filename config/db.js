const pgp = require('pg-promise')();
require('dotenv').config(); // Make sure .env is loaded

// Log the environment variable to check if it's loaded correctly
console.log('DB_PASS:', process.env.DB_PASS);

const db = pgp({
    host: process.env.DB_HOST || 'localhost',
    port:  5432,
    database: process.env.DB_NAME || 'online-bookstore',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'Gyembo@123',  // Ensure this is a string
});

module.exports = db;
