const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  if (!isNaN(cartId)) {
    res.send(`Payment methods for cart ${cartId}`);
  } else {
    res.status(400).send('Invalid cart ID');
  }
});

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  if (username) {
    res.send(`Welcome ${username}`);
  } else {
    res.status(400).send('Username is required');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
