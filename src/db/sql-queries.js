
const db = require('./db-connections');

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


const sqlQuery = createUsersTable();
module.exports = sqlQuery;



