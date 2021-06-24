import { Arg, FieldResolver, Query,
    Resolver, ResolverInterface, Root } from 'type-graphql';

import { Album, Artist } from '../entities';
import { AlbumService, ArtistService } from '../interfaces';
import { SqliteAlbumService, SqliteArtistService } from '../services';

@Resolver(Album)
export class AlbumResolver implements ResolverInterface<Album> {
    constructor(private artistService: ArtistService = new SqliteArtistService(),
                private albumService: AlbumService = new SqliteAlbumService()) { }

    @Query(returns => Album)
    async album(@Arg('albumId') albumId: number): Promise<Album|undefined> {
        return this.albumService.getAlbum(albumId);
    }

    @Query(returns => [ Album ])
    async albums(@Arg('artistId') artistId: number): Promise<Album[]> {
        return this.albumService.getAlbumsByArtistId(artistId);
    }

    @FieldResolver()
    async artist(@Root() album: Album): Promise<Artist> {
        const artist = await this.artistService.getArtist(album.artistId);
        if (artist === undefined) {
            throw new Error(`An artist wasn't associated with albumId: ${ album.id }`);
        }

        return artist;
    }
}