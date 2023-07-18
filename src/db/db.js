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



async function createUsersTable() {
  try {
    await db.none(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT
      )
    `);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
}
createUsersTable();



