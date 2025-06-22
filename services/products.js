const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: 'products', products: ['Laptop', 'Mouse'] });
});

app.listen(3002, () => {
  console.log('Products Services on http://localhost:3002');
});
