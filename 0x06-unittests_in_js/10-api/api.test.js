const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('gET /', () => {
  it('responds with welcome message', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('gET /cart/:id', () => {
  it('responds with payment methods for given cart ID', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  }));

  it('responds with 404 for non-numeric cart ID', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});

describe('gET /available_payments', () => {
  it('responds with available payment methods', () => new Promise((done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  }));
});

describe('pOST /login', () => {
  it('responds with welcome message for valid user', () => new Promise((done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: { username: 'testuser' },
    };
    request.post(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome testuser');
      done();
    });
  }));

  it('responds with 404 for missing username', () => new Promise((done) => {
    request.post('http://localhost:7865/login', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
