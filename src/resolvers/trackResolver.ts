import { Arg, FieldResolver, Query,
    Resolver, ResolverInterface, Root } from 'type-graphql';

import { Album, Track } from '../entities';
import { AlbumService, TrackService } from '../interfaces';
import { SqliteAlbumService, SqliteTrackService } from '../services';

@Resolver(Track)
export class TrackResolver implements ResolverInterface<Track> {
    constructor(private trackService: TrackService = new SqliteTrackService(),
                private albumService: AlbumService = new SqliteAlbumService()) { }

    @Query(returns => Track)
    async track(@Arg('trackId') trackId: number): Promise<Track|undefined> {
        return this.trackService.getTrack(trackId);
    }

    @Query(returns => [ Track ])
    async tracks(@Arg('albumId') albumId: number): Promise<Track[]> {
        return this.trackService.getTracksByAlbumId(albumId);
    }

    @FieldResolver()
    async album(@Root() track: Track): Promise<Album> {
        const album = await this.albumService.getAlbum(track.albumId);
        if (album === undefined) {
            throw new Error(`An album wasn't associated with trackId: ${ track.id }`);
        }

        return album;
    }
}