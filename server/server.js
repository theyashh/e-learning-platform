const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'elearning'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = `SELECT * FROM users WHERE id = ${userId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, bio } = req.body;
  const sql = `UPDATE users SET name = ?, bio = ? WHERE id = ${userId}`;
  db.query(sql, [name, bio], (err, result) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
