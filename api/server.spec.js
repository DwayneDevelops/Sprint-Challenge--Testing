const supertest = require('supertest');

const server = require('./server.js');

describe('server', () => {
  describe('GET /', () => {
    it('responds with 200 OK', async () => {
        await supertest(server)
        .get('/')
        .expect(200);
    });

    it('responds with 200 OK', async () => {
        await supertest(server)
        .get('/')
        .expect('Content-Type', /json/i);
    });

    it('responds with correct status', done => {
        supertest(server)
        .get('/')
        .expect(200, done);
    });

    it('responds { api: "Hey party people!" }', async () => {
        await supertest(server)
        .get('/')
        .then(res => {
        expect(res.body).toEqual({ api: 'Hey party people!' });
        });
    });
  });

  describe('Post/', () => {
      it('responds with a 422 error code', async () => {
          await supertest(server)
          .get('/games')
          .expect(200)
      });
  });
});