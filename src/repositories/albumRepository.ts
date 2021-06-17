import { Connection, getConnection } from 'typeorm';

import { Album } from '../entities';

export class AlbumRepository {
    private connection: Connection;

    constructor() {
        this.connection = getConnection();
    }

    public getAlbum = async (albumId: number) => {
        const albums = await this.connection.getRepository(Album)
            .createQueryBuilder('album')
            .where('album.id = :id', { id: albumId })
            .getMany();

        return albums;
    }

    public getAlbumsByArtistId = async (artistId: number) => {
        const albums = await this.connection.getRepository(Album)
            .createQueryBuilder('album')
            .where('album.artistId = :artistId', { artistId: artistId })
            .getMany();

        return albums;
    }
}