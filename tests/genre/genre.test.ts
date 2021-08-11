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

describe('get all genres', () => {
    test('query all genres in database, returns 25 total genres', async () => {
        // arrange
        const query = '{ genres { id, name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { genres } = response.body.data;
        expect(genres.length).toBe(25);
    });
});

describe('get genre by genre id', () => {
    test('query genre by genre id: 1, returns Rock', async () => {
        // arrange
        const query = '{ genre(genreId: 1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { genre } = response.body.data;
        expect(genre.name).toBe('Rock');
    });

    test('query genre by genre id: 2, returns Jazz', async () => {
        // arrange
        const query = '{ genre(genreId: 2) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { genre } = response.body.data;
        expect(genre.name).toBe('Jazz');
    });

    test('query genre by genre id: 1000, returns null', async () => {
        // arrange
        const query = '{ genre(genreId: 1000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { genre } = response.body.data;
        expect(genre).toBeNull();
    });
});