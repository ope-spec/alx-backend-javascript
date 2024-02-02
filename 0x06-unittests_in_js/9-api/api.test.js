const request = require('request');
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

  it('gET /cart/:id should return 404 status code when :id is NOT a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
