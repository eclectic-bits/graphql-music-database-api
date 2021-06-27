import { Arg, Query, Resolver } from 'type-graphql';

import { Playlist } from '../entities';
import { PlaylistService } from '../interfaces';
import { SqlitePlaylistService } from '../services';

@Resolver(Playlist)
export class PlaylistResolver {
    constructor(private readonly playlistService: PlaylistService = new SqlitePlaylistService()) { }

    @Query(returns => Playlist)
    public async playlist(@Arg('playlistId') playlistId: number): Promise<Playlist | undefined> {
        return this.playlistService.getPlaylist(playlistId);
    }
}