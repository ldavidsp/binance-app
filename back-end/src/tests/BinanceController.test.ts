import supertest from "supertest";
import app from "../index";

describe('Test Routes', function () {

  test('GET /losers', async () => {
    const res = await supertest(app).get('/losers');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    //expect(res.body).toHaveProperty('[]');
  });

  test('GET /account', async () => {
    const res = await supertest(app).get('/account');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    //expect(res.body).toHaveProperty();
  });

  test('GET /limit', async () => {
    const res = await supertest(app).get('/limit');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    //expect(res.body).toHaveProperty('[]');
  });

});
