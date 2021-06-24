import { Artist } from '../entities';

export interface ArtistService {
    getArtist(artistId: number): Promise<Artist|undefined>;

    getArtists(): Promise<Artist[]>;
}