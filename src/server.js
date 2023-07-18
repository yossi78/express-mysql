const express = require('express');
const app = express();
const port = 3000; // choose any port number you prefer


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


app.use(express.json()); // parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello World!');
});



const db = require('./db/db');



app.get('/api/users', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await db.one('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const user = await db.one('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await db.one('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});







