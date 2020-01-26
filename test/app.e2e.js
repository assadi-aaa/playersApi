const supertest = require('supertest');
const app = require('../app');
const chai = require('chai');

describe('Get / ', () => {

    it('should return status 200', (done) => {
            supertest(app)
                .get("/")
                .expect('Hello World!')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err);
                    done();
                })
        }
    )

});



