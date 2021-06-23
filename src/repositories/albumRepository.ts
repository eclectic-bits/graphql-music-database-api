import { Repository } from './repository';
import { Album } from '../entities';

export class AlbumRepository extends Repository {
    public getAlbum = async (albumId: number) => {
        const album = await this.connection.getRepository(Album)
            .createQueryBuilder('album')
            .where('album.id = :id', { id: albumId })
            .getOne();

        return album;
    }
}