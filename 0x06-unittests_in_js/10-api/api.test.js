const request = require('request');
const { expect } = require('chai');

describe('Login endpoint', function() {
  it('should return correct status code and result', function(done) {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', function() {
  it('should return correct status code and result', function(done) {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
