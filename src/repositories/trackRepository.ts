import { Repository } from './repository';
import { Track } from '../entities';

export class TrackRepository extends Repository {
    public getTrack = async (trackId: number) => {
        const track = await this.connection.getRepository(Track)
            .createQueryBuilder('track')
            .where('track.id = :id', { id: trackId })
            .getMany();

        return track;
    }

    public getTracksByAlbumId = async (albumId: number) => {
        const tracks = await this.connection.getRepository(Track)
            .createQueryBuilder('track')
            .where('track.albumId = :albumId', { albumId: albumId })
            .getMany();

        return tracks;
    }
}