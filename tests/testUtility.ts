import request from 'supertest';
import express from 'express';

export class TestUtility {
    public static testSuccess = async (app: express.Express, query: any) => {
        let data: any;

        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                data = response;
            })
            .catch(err => {
                throw err;
            });

        return data;
    };
}