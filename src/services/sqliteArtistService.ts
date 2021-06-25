import { Connection, Repository, getConnection } from 'typeorm';

import { Artist } from '../entities';
import { ArtistService } from '../interfaces';

export class SqliteArtistService implements ArtistService {
    private readonly repository: Repository<Artist>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(Artist);
    }

    public getArtist = async (artistId: number): Promise<Artist | undefined> => {
        return this.repository.findOne({ 'id': artistId });
    }

    public getArtists = async (): Promise<Artist[]> => {
        return this.repository.find();
    }
}