import { Repository } from './repository';
import { Album } from '../entities';

export class AlbumRepository extends Repository {
    public getAlbum = async (albumId: number): Promise<Album|undefined> => {
        return this.connection.getRepository(Album).findOne({ id: albumId });
    }

    public getAlbumsByArtistId = async (artistId: number): Promise<Album[]> => {
        return this.connection.getRepository(Album).find({
            artistId: artistId
        });
    }
}