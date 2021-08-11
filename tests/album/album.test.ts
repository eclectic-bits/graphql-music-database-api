import express from 'express';

import { TestUtility } from '../testUtility';

import { server } from '../../src/server';
import { DatabaseContext, GraphqlHttpContext } from '../../src/contexts';
import { AlbumResolver } from '../../src/resolvers';
import { Album, Artist, Track } from '../../src/entities';
import { ArtistService, TrackService } from '../../src/interfaces';

jest.mock('../../src/interfaces/artistService');

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

describe('get album artist by field resolver', () => {
    test('albumId: 1 is AC/DC - For Those About To Rock We Salute You', async () => {
        // arrange
        const query = '{ album(albumId: 1) { artist { id, name } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { album } = response.body.data;
        expect(album.artist.id).toBe('1');
        expect(album.artist.name).toBe('AC/DC');
    });

    test('no artist associated with album', async () => {
        // arrange
        class TestArtistService implements ArtistService {
            public getArtist = async (artistId: number): Promise<Artist | undefined> => {
                return undefined;
            };

            public getArtists = async (): Promise<Artist[]> => {
                return [];
            };
        }

        const resolver = new AlbumResolver(new TestArtistService(), undefined, undefined);

        const album = new Album();
        album.id = 1;
        album.artistId = 1;
        album.title = 'For Those About To Rock We Salute You';

        try {
            // act
            await resolver.artist(album);
        } catch (exception: any) {
            // assert
            expect(exception.message).toBe(`An artist wasn't associated with albumId: ${ album.id }`);
        }
    });
});

describe('get album tracks by field resolver', () => {
    test('albumId: 1 is AC/DC - For Those About To Rock We Salute You, 10 tracks returned', async() => {
        // arrange
        const query = '{ album(albumId: 1) { tracks { id, name } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { album } = response.body.data;
        expect(album.tracks.length).toBe(10);
    });
});