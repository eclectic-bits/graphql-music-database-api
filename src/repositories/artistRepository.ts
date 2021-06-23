import { Repository } from './repository';
import { Artist } from '../entities';

export class ArtistRepository extends Repository {
    public getArtist = async (artistId: number) => {
        const artist = await this.connection.getRepository(Artist)
            .createQueryBuilder('artist')
            .where('artist.id = :id', { id: artistId })
            .getOne();

        return artist;
    }
}