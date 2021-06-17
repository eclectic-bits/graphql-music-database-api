import { ConnectionOptions, createConnection } from 'typeorm';

import { AlbumRepository, ArtistRepository } from './repositories';

async function main () {
    const options: ConnectionOptions = {
        type: 'sqlite',
        database: 'data/chinook.sqlite',
        entities: [ 'src/entities/*.ts' ],
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

    connection.close();
}

main().catch(console.error);