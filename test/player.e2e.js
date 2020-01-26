const supertest = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('Get /players', function () {

    it('should get list of players', (done) => {
        supertest(app)
            .get('/players')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('array');
                return done();
            })
    })

});
