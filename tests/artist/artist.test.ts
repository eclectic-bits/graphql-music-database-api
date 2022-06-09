import { beforeAll, describe, expect, test } from '@jest/globals';

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

describe('get all artists', () => {
    test('query all artists in database, returns 275 total artists', async () => {
        // arrange
        const query = '{ artists { id, name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artists } = response.body.data;
        expect(artists.length).toBe(275);
    });
});

describe('get artist by artist id', () => {
    test('query artist by artist id: 1, returns AC/DC', async () => {
        // arrange
        const query = '{ artist(artistId: 1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artist } = response.body.data;
        expect(artist.name).toBe('AC/DC');
    });

    test('query artist by artist id: 3, returns Aerosmith', async () => {
        // arrange
        const query = '{ artist(artistId: 3) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artist } = response.body.data;
        expect(artist.name).toBe('Aerosmith');
    });

    test('query artist by artist id: 1000, returns null', async () => {
        // arrange
        const query = '{ artist(artistId: 1000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artist } = response.body.data;
        expect(artist).toBeNull();
    });
});

describe('get albums artist by field resolver', () => {
    test('query albums by artistId: 1 (AC/DC)', async () => {
        // arrange
        const query = '{ artist(artistId: 1) { name, albums { title } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artist } = response.body.data;
        expect(artist.albums.length).toBe(2);
    });

    test('query albums by artistId: 3 (Aerosmith)', async () => {
        // arrange
        const query = '{ artist(artistId: 3) { name, albums { title } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { artist } = response.body.data;
        expect(artist.albums.length).toBe(1);
    });
});