import { Connection, Repository, getConnection } from 'typeorm';

import { Playlist } from '../entities';
import { PlaylistService } from '../interfaces';

export class SqlitePlaylistService implements PlaylistService {
    private readonly repository: Repository<Playlist>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(Playlist);
    }

    public getPlaylist = async (playlistId: number): Promise<Playlist | undefined> => {
        return this.repository.findOne({ 'id': playlistId });
    };
}