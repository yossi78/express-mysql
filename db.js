const pgp = require('pg-promise')();



const connection = {
  host: '127.0.0.1',
  port: 5432,
  database: 'test-db',
  user: 'postgres',
  password: '1234567'
};


const db = pgp(connection);

module.exports = db;


