import { Album } from '../entities';

export interface AlbumService {
    getAlbum(albumId: number): Promise<Album|undefined>;

    getAlbumsByArtistId(artistId: number): Promise<Album[]>;
}