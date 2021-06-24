import { Connection, Repository, getConnection } from 'typeorm';

import { Album } from '../entities';
import { AlbumService } from '../interfaces';

export class SqliteAlbumService implements AlbumService {
    private repository: Repository<Album>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(Album);
    }

    public getAlbum = async (albumId: number): Promise<Album|undefined> => {
        return this.repository.findOne({ id: albumId });
    }

    public getAlbumsByArtistId = (artistId: number): Promise<Album[]> => {
        return this.repository.find({ artistId: artistId });
    }
}