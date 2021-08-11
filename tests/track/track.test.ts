import express from 'express';

import { TestUtility } from '../testUtility';

import { DatabaseContext, GraphqlHttpContext } from '../../src/contexts';
import { server } from '../../src/server';
import { AlbumService, GenreService, MediaTypeService } from '../../src/interfaces';
import { Album, Genre, MediaType, Track } from '../../src/entities';
import { TrackResolverHelper } from '../helpers';

let app: express.Express;
beforeAll(async () => {
    // database
    await DatabaseContext.initializeDatabaseConnection({ 'debug': false });

    // schema
    const schema = await GraphqlHttpContext.generateHttpConfiguration();

    app = await server(schema);
});

describe('get track by trackId', () => {
    test('trackId: 1 is For Those About To Rock (We Salute You)', async () => {
        // arrange
        const query = '{ track(trackId: 1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track.name).toBe('For Those About To Rock (We Salute You)');
    });

    test('trackId: 3 is Fast As a Shark', async () => {
        // arrange
        const query = '{ track(trackId: 3) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track.name).toBe('Fast As a Shark');
    });

    test('trackId: 10000 does not exist, return null', async () => {
        // arrange
        const query = '{ track(trackId: 10000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track).toBeNull();
    });
});

describe('get tracks by albumId', () => {
    test('albumId: 1 is AC/DC - For Those About To Rock We Salute You, as 10 tracks', async () => {
        // arrange
        const query = '{ tracks(albumId:1) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { tracks } = response.body.data;
        expect(tracks.length).toBe(10);
    });

    test('albumId: 3 is Accept - Restless and Wild, as 3 tracks', async () => {
        // arrange
        const query = '{ tracks(albumId:3) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { tracks } = response.body.data;
        expect(tracks.length).toBe(3);
    });

    test('albumId: 1000 does not exist, return empty list', async () => {
        // arrange
        const query = '{ tracks(albumId:1000) { name } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { tracks } = response.body.data;
        expect(tracks.length).toBe(0);
    });
});

describe('get track album by field resolver', () => {
    test('trackId: is in album Restless and Wild', async () => {
        // arrange
        const query = '{ track(trackId: 3) { name, album { title } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track.name).toBe('Fast As a Shark');
        expect(track.album.title).toBe('Restless and Wild');
    });

    test('no album associated with track', async () => {
        // arrange
        class TestAlbumService implements AlbumService {
            public getAlbum = async (albumId: number): Promise<Album | undefined> => {
                return undefined;
            };

            public getAlbumsByArtistId = async (artistId: number): Promise<Album[]> => {
                throw new Error('Method not implemented.');
            };
        }

        const resolver = TrackResolverHelper.getTrackResolver({ 'albumService': new TestAlbumService() });

        const track = new Track();
        track.id = 1;

        try {
            // act
            await resolver.album(track);
        } catch (exception: any) {
            // assert
            expect(exception.message).toBe(`An album wasn't associated with trackId: ${ track.id }`);
        }
    });
});

describe('get track genre by field resolver', () => {
    test('trackId: 3 is genre Rock', async () => {
        // arrange
        const query = '{ track(trackId: 3) { name, genre { name } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track.name).toBe('Fast As a Shark');
        expect(track.genre.name).toBe('Rock');
    });

    test('no genre associated with track', async () => {
        // arrange
        class TestGenreService implements GenreService {
            public getGenre = async (genreId: number): Promise<Genre | undefined> => {
                return undefined;
            };

            public getGenres = async (): Promise<Genre[]> => {
                throw new Error('Method not implemented.');
            };
        }

        const resolver = TrackResolverHelper.getTrackResolver({ 'genreService': new TestGenreService() });

        const track = new Track();
        track.id = 1;

        try {
            // act
            await resolver.genre(track);
        } catch (exception: any) {
            // assert
            expect(exception.message).toBe(`A genre wasn't associated with trackId: ${ track.id }`);
        }
    });
});

describe('get track mediaType by field resolver', () => {
    test('trackId: 3 is mediaType Rock', async () => {
        // arrange
        const query = '{ track(trackId: 3) { name, mediaType { name } } }';

        // act
        const response = await TestUtility.testSuccess(app, query);

        // assert
        const { track } = response.body.data;
        expect(track.name).toBe('Fast As a Shark');
        expect(track.mediaType.name).toBe('Protected AAC audio file');
    });

    test('no mediaType associated with track', async () => {
        // arrange
        class TestMediaTypeService implements MediaTypeService {
            public getMediaTypes = async (): Promise<MediaType[]> => {
                throw new Error('Method not implemented.');
            };

            public getMediaType = async (mediaTypeId: number): Promise<MediaType | undefined> => {
                return undefined;
            };
        }

        const resolver = TrackResolverHelper.getTrackResolver({ 'mediaTypeService': new TestMediaTypeService() });

        const track = new Track();
        track.id = 1;

        try {
            // act
            await resolver.mediaType(track);
        } catch (exception: any) {
            // assert
            expect(exception.message).toBe(`A media type wasn't associated with trackId: ${ track.id }`);
        }
    });
});