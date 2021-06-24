import { Artist } from '../entities';

export interface ArtistService {
    getArtists(): Promise<Artist[]>;

    getArtist(artistId: number): Promise<Artist|undefined>;
}