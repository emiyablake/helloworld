const request = require('supertest');
const index = require('../src/index');

describe('Server', () => {
  let server;

  beforeAll((done) => {
    server = index.listen(3001, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should start and respond to requests', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
  });
});