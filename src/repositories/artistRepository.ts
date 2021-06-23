import { Repository } from './repository';
import { Artist } from '../entities';

export class ArtistRepository extends Repository {
    public getArtist = async (artistId: number): Promise<Artist|undefined> => {
        return this.connection.getRepository(Artist).findOne({ id: artistId });
    }

    public getArtists = async (): Promise<Artist[]> => {
        return this.connection.getRepository(Artist).find();
    }
}