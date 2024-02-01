const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
