import { beforeAll, describe, expect, test } from '@jest/globals';

import express from 'express';

import { TestUtility } from '../testUtility';

import { DatabaseContext, GraphqlHttpContext } from '../../src/contexts';
import { server } from '../../src/server';

let app: express.Express;
beforeAll(async () => {
    // database
    await DatabaseContext.initializeDatabaseConnection({ 'debug': false });

    // schema
    const schema = await GraphqlHttpContext.generateHttpConfiguration();

    app = await server(schema);
});

describe('get playlist by playlistId', () => {
    test('playlistId: 1 is Music', async () => {
        // arrange
        const query = '{ playlist(playlistId: 1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { playlist } = response.body.data;
        expect(playlist.name).toBe('Music');
    });

    test('playlistId: 2 is Music', async () => {
        // arrange
        const query = '{ playlist(playlistId: 2) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { playlist } = response.body.data;
        expect(playlist.name).toBe('Movies');
    });

    test('playlistId: 2000 does not exist, return null', async () => {
        // arrange
        const query = '{ playlist(playlistId: 2000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { playlist } = response.body.data;
        expect(playlist).toBeNull();
    });
});