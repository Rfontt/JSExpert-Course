const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('./api');
const assert = require('assert');

describe('Api Suite test', () => {
    describe('/contact', () => {
        it('Should request the contact page and return HTTP Status 200', async () => {
            const response = await request(app)
                            .get('/contact')
                            .expect(200);
            
            assert.deepStrictEqual(response.text, 'Contact us page');
        })
    })

    describe('/hello', () => {
        it('Should request an inexistent rouye /hi and redirect to /hello', async () => {
            const response = await request(app)
                            .get('/hi')
                            .expect(200);
            
            assert.deepStrictEqual(response.text, 'Hello world');
        })
    })

    describe('/login', () => {
        it('Should login sucessfully on the login route and return HTTP Status 200', async () => {
            const response = await request(app)
                            .post('/login')
                            .send({ username: 'Teste', password: 'HelloWorld' })
                            .expect(200);
            
            assert.deepStrictEqual(response.text, 'Login with sucess');
        })

        it('Should login failed on the login route and return HTTP Status 401', async () => {
            const response = await request(app)
                            .post('/login')
                            .send({ username: 'OutherTeste', password: 'HelloWorld' })
                            .expect(401);
            
            assert.deepStrictEqual(response.text, 'Login failed');
        })
    })
})