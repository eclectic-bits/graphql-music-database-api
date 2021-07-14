import request from 'supertest';
import express from 'express';

import { server } from '../../src/server';
import { DatabaseContext, GraphqlHttpContext } from '../../src/contexts';

let app: express.Express;
beforeAll(async () => {
    // database
    await DatabaseContext.initializeDatabaseConnection({ 'debug': false });

    // schema
    const schema = await GraphqlHttpContext.generateHttpConfiguration();

    app = await server(schema);
});

describe('get all albums by artistId', () => {
    it('should contain 2 albums by artistsId: 1 (AC/DC)', async () => {
        // arrange
        const query = '{ albums(artistId: 1) { title } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { albums } = response.body.data;
                expect(albums.length).toBe(2);

                // const { forThoseAboutToRock } = albums;
            })
            .catch(err => {
                throw err;
            });
    });
});

describe('get album by albumId', () => {
    test('albumId: 1 is AC/DC - For Those About To Rock We Salute You', async () => {
        // arrange
        const query = '{ album(albumId: 1) { title, artistId } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { album } = response.body.data;
                expect(album.title).toBe('For Those About To Rock We Salute You');
                expect(album.artistId).toBe(1);
            })
            .catch(err => {
                throw err;
            });
    });

    test('albumId: 3 is Accept - Restless and Wild', async () => {
        // arrange
        const query = '{ album(albumId: 3) { title, artistId } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { album } = response.body.data;
                expect(album.title).toBe('Restless and Wild');
                expect(album.artistId).toBe(2);
            })
            .catch(err => {
                throw err;
            });
    });

    test('albumId: 2500 does not exist, returns null', async () => {
        // arrange
        const query = '{ album(albumId: 2500) { title } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { album } = response.body.data;
                expect(album).toBeNull();
            })
            .catch(err => {
                throw err;
            });
    });
});