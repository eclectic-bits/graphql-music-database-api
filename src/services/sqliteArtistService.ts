import { Service } from 'typedi';
import { Connection, Repository } from 'typeorm';

import { Artist } from '../entities';
import { ArtistService } from '../interfaces';

@Service()
export class SqliteArtistService implements ArtistService {
    repository: Repository<Artist>;

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Artist);
    }

    public getArtist = async (artistId: number): Promise<Artist|undefined> => {
        return this.repository.findOne({ id: artistId });
    }
}