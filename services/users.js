const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: 'users', users: ['Francisco', 'Admin'] });
});

app.listen(3001, () => {
  console.log('Users Services on http://localhost:3001');
});
