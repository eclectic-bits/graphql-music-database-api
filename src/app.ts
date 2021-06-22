import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';

import * as entities from './entities';
import { AlbumRepository,
    ArtistRepository,
    TrackRepository } from './repositories';

// eslint-disable-next-line max-statements
async function main () {
    const options: ConnectionOptions = {
        type: 'sqlite',
        database: 'data/chinook.sqlite',
        entities: Object.values(entities),
        logging: true
    };
    const connection = await createConnection(options);

    const artistId = 1;

    // artists
    const artistRepository = new ArtistRepository();
    const artist = await artistRepository.getArtist(artistId);
    console.log(artist);

    // albums
    const albumRepository = new AlbumRepository();
    const albums = await albumRepository.getAlbumsByArtistId(artistId);
    console.log(albums);

    const albumId = 1;

    // tracks
    const trackRepository = new TrackRepository();
    const tracks = await trackRepository.getTracksByAlbumId(albumId);
    console.log(tracks);

    connection.close();
}

main().catch(console.error);