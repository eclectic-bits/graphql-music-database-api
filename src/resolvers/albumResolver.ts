import { Arg, FieldResolver, Query,
    Resolver, ResolverInterface, Root } from 'type-graphql';

import { Album, Artist, Track } from '../entities';
import { AlbumService, ArtistService, TrackService } from '../interfaces';
import { SqliteAlbumService, SqliteArtistService, SqliteTrackService } from '../services';

@Resolver(Album)
export class AlbumResolver implements ResolverInterface<Album> {
    constructor(private artistService: ArtistService = new SqliteArtistService(),
                private albumService: AlbumService = new SqliteAlbumService(),
                private trackService: TrackService = new SqliteTrackService()) { }

    @Query(returns => Album)
    public async album(@Arg('albumId') albumId: number): Promise<Album|undefined> {
        return this.albumService.getAlbum(albumId);
    }

    @Query(returns => [ Album ])
    public async albums(@Arg('artistId') artistId: number): Promise<Album[]> {
        return this.albumService.getAlbumsByArtistId(artistId);
    }

    @FieldResolver()
    public async artist(@Root() album: Album): Promise<Artist> {
        const artist = await this.artistService.getArtist(album.artistId);
        if (artist === undefined) {
            throw new Error(`An artist wasn't associated with albumId: ${ album.id }`);
        }

        return artist;
    }

    @FieldResolver()
    public async tracks(@Root() album: Album): Promise<Track[]> {
        return this.trackService.getTracksByAlbumId(album.id);
    }
}