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

describe('get all artists', () => {
    it('should contain 275 artists in the sample database', async () => {
        // arrange
        const query = '{ artists { id, name } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artists } = response.body.data;
                expect(artists.length).toBe(275);
            })
            .catch(err => {
                throw err;
            });
    });
});

describe('get artist by artist id', () => {
    it('should contain AC/DC as artistId: 1', async () => {
        // arrange
        const query = '{ artist(artistId: 1) { name } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artist } = response.body.data;
                expect(artist.name).toBe('AC/DC');
            })
            .catch(err => {
                throw err;
            });
    });

    it('should contain Aerosmith as artistId: 3', async () => {
        // arrange
        const query = '{ artist(artistId: 3) { name } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artist } = response.body.data;
                expect(artist.name).toBe('Aerosmith');
            })
            .catch(err => {
                throw err;
            });
    });

    it('should return null because artistId 1000 doesn\'t exist', async () => {
        // arrange
        const query = '{ artist(artistId: 1000) { name } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artist } = response.body.data;
                expect(artist).toBeNull();
            })
            .catch(err => {
                throw err;
            });
    });
});

describe('get albums artist by field resolver', () => {
    it('should contain 2 albums for artistId: 1 (AC/DC)', async () => {
        // arrange
        const query = '{ artist(artistId: 1) { name, albums { title } } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artist } = response.body.data;
                expect(artist.albums.length).toBe(2);
            })
            .catch(err => {
                throw err;
            });
    });

    it('should contain 1 album for artistId: 3 (Aerosmith)', async () => {
        // arrange
        const query = '{ artist(artistId: 3) { name, albums { title } } }';

        // act
        await request(app)
            .post('/')
            .send({ 'query': query })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                // assert
                const { artist } = response.body.data;
                expect(artist.albums.length).toBe(1);
            })
            .catch(err => {
                throw err;
            });
    });
});