import { Connection, getConnection } from 'typeorm';

import { Artist } from '../entities';

export class ArtistRepository {
    private connection: Connection;

    constructor() {
        this.connection = getConnection();
    }

    public getArtist = async (artistId: number) => {
        const artist = await this.connection.getRepository(Artist)
            .createQueryBuilder('artist')
            .where('artist.id = :id', { id: artistId })
            .getOne();

        return artist;
    }
}