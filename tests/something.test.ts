import request from 'supertest';
import express from 'express';

import { server } from '../src/server';
import { GraphqlHttpContext } from '../src/contexts';

let app: express.Express;
beforeAll(async () => {
    const schema = await GraphqlHttpContext.generateHttpConfiguration();
    app = await server(schema);
});

describe('describe block', () => {
    test('test block', async () => {
        await request(app)
            .get('/')
            .expect(200);
    });
});