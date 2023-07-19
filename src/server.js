const express = require('express');
const app = express();
const port = 3000; 
const usersRoutes = require('./router/user.route');
const sqlQueries = require('./db/sql-queries');




sqlQueries.runQueries();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(express.json()); // parse JSON requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/users', usersRoutes);














