var expect = require('chai').expect;
var request = require('request');

it('Main page status', function (done) {
    request('http://localhost:3000', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Crypto News page status', function (done) {
    request('http://localhost:3000/crypto-news', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

// it('CryptoControl API Key', function(done) {
    
// });