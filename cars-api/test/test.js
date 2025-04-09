const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const request = require('supertest');
require('dotenv').config();

const app = require('../app');

chai.use(chaiHttp);

describe('Test API Car', () => {
  it('Devrait récupérer un message de succès depuis la route principale', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'API Car fonctionne avec succès !');
        done();
      });
  });
});
