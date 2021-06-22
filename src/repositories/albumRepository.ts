import { Repository } from './repository';
import { Album } from '../entities';

export class AlbumRepository extends Repository {
    public getAlbum = async (albumId: number) => {
        const album = await this.connection.getRepository(Album)
            .createQueryBuilder('album')
            .where('album.id = :id', { id: albumId })
            .getMany();

        return album;
    }

    public getAlbumsByArtistId = async (artistId: number) => {
        const albums = await this.connection.getRepository(Album)
            .createQueryBuilder('album')
            .where('album.artistId = :artistId', { artistId: artistId })
            .getMany();

        return albums;
    }
}