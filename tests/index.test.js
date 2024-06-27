
const request = require('supertest');
const index = require('../src/index');

describe('GET /', () => {
    it('sould respond with the index.html file', async () => {
        const response = await request(index).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
    });
});

describe('GET /contato', () => {
  it('sould respond with the index.html file', async () => {
      const response = await request(index).get('/');
      expect(response.status).toBe(200);

  });
});

/*
const request = require('supertest');
const path = require('path');
const fs = require('fs');
const index = require('../src/index');

describe('GET /', () => {
  it('should respond with the index.html file', async () => {
    const response = await request(index).get('/');
    expect(response.status).toBe(200);
    const filePath = path.join(__dirname, '../views/index.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    expect(response.text).toBe(fileContent);
  });
});*/