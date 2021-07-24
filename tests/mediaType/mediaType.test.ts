import express from 'express';

import { server } from '../../src/server';
import { DatabaseContext, GraphqlHttpContext } from '../../src/contexts';
import { TestUtility } from '../testUtility';

let app: express.Express;
beforeAll(async () => {
    // database
    await DatabaseContext.initializeDatabaseConnection({ 'debug': false });

    // schema
    const schema = await GraphqlHttpContext.generateHttpConfiguration();

    app = await server(schema);
});

describe('get all mediaTypes', () => {
    test('query all mediaTypes in database, returns 5 total mediaTypes', async () => {
        // arrange
        const query = '{ mediaTypes { id, name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { mediaTypes } = response.body.data;
        expect(mediaTypes.length).toBe(5);
    });
});

describe('get mediaType by mediaType id', () => {
    test('query mediatype by mediaType id: 1, returns MPEG audio file', async () => {
        // arrange
        const query = '{ mediaType(mediaTypeId: 1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { mediaType } = response.body.data;
        expect(mediaType.name).toBe('MPEG audio file');
    });

    test('query mediaType by mediaType id: 2, returns Protected AAC audio file', async () => {
        // arrange
        const query = '{ mediaType(mediaTypeId: 2) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { mediaType } = response.body.data;
        expect(mediaType.name).toBe('Protected AAC audio file');
    });

    test('query mediaType by mediaType id: 1000, returns null', async () => {
        // arrange
        const query = '{ mediaType(mediaTypeId: 1000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { mediaType } = response.body.data;
        expect(mediaType).toBeNull();
    });
});