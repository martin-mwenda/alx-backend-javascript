const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;
  before(() => {
    server = require('./api.js'); // Start the server before tests
  });

  after(() => {
    server.close(); // Close server after tests
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Server is running?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include('Welcome to the payment system');
      done();
    });
  });
});

