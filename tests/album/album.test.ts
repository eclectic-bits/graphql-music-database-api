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

describe('get all albums by artistId', () => {
    test('artistsId: 3 (Aerosmith) contains 1 albums', async () => {
        // arrange
        const query = '{ albums(artistId: 3) { title } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { albums } = response.body.data;
        expect(albums.length).toBe(1);

        expect(albums[0].title).toBe('Big Ones');
    });

    test('artistId: 1500 does not exist, return empty array', async () => {
        // arrange
        const query = '{ albums(artistId: 1500) { title } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { albums } = response.body.data;
        expect(albums.length).toBe(0);
    });
});

describe('get album by albumId', () => {
    test('albumId: 1 is AC/DC - For Those About To Rock We Salute You', async () => {
        // arrange
        const query = '{ album(albumId: 1) { title, artistId } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { album } = response.body.data;
        expect(album.title).toBe('For Those About To Rock We Salute You');
        expect(album.artistId).toBe(1);
    });

    test('albumId: 3 is Accept - Restless and Wild', async () => {
        // arrange
        const query = '{ album(albumId: 3) { title, artistId } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { album } = response.body.data;
        expect(album.title).toBe('Restless and Wild');
        expect(album.artistId).toBe(2);
    });

    test('albumId: 2500 does not exist, returns null', async () => {
        // arrange
        const query = '{ album(albumId: 2500) { title } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { album } = response.body.data;
        expect(album).toBeNull();
    });
});