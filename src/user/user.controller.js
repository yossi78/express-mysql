
const db = require('../db/db-connections');




const addUser = async (req, res)=> {
    try {
      const { name, email } = req.body;
      const user = await db.one('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }


  const updateUser = async (req, res)=> {
    try {
      const id = req.params.id;
      const { name, email } = req.body;
      const user = await db.one('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  

const getAllUsers = async (req, res)=> {
    try {
      const users = await db.any('SELECT * FROM users');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }


  const deleteUser = async (req, res)=> {
    try {
      const id = req.params.id;
      const user = await db.one('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }



module.exports = {getAllUsers,addUser,updateUser,deleteUser};