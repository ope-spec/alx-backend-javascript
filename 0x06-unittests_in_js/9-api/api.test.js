const request = require('request');
const { expect } = require('chai');

describe('cart page', () => {
  it('should return correct status code and result when :id is a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));

  it('should return 404 status code when :id is NOT a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
