const request = require('supertest');
const index = require('../src/index');

describe('GET /', () => {
    it('sould respond with the index.html file', async () => {
        const response = await request(index).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
    });
});