const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('aPI Tests', () => {
  it('gET / should return "Welcome to the payment system"', () => new Promise((done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('gET /cart/:id should return "Payment methods for cart {id}" when :id is a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));

  it('gET /cart/:id should return 400 status code when :id is NOT a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  }));

  it('gET /available_payments should return the right object', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  }));

  it('pOST /login should return the right message', () => new Promise((done) => {
    request.post('http://localhost:7865/login', { json: { username: 'John' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome John');
      done();
    });
  }));

  it('pOST /login should return 400 status code when username is missing', () => new Promise((done) => {
    request.post('http://localhost:7865/login', (error, response) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  }));
});
