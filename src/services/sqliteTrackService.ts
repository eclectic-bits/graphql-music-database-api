import { Connection, Repository, getConnection } from 'typeorm';

import { Track } from '../entities';
import { TrackService } from '../interfaces';

export class SqliteTrackService implements TrackService {
    private readonly repository: Repository<Track>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(Track);
    }

    public getTrack = async (trackId: number): Promise<Track|undefined> => {
        return this.repository.findOne({ 'id': trackId });
    };

    public getTracksByAlbumId = async (albumId: number): Promise<Track[]> => {
        return this.repository.find({ 'albumId': albumId });
    };
}