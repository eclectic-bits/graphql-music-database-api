import { Arg, FieldResolver, Query, Resolver,
    ResolverInterface, Root } from 'type-graphql';

import { Album, Artist } from '../entities';
import { AlbumService, ArtistService } from '../interfaces';
import { SqliteAlbumService, SqliteArtistService } from '../services';

@Resolver(Artist)
export class ArtistResolver implements ResolverInterface<Artist> {
    constructor(private artistService: ArtistService = new SqliteArtistService(),
                private albumService: AlbumService = new SqliteAlbumService()) { }

    @Query(returns => [ Artist ])
    async artists(): Promise<Artist[]> {
        return this.artistService.getArtists();
    }

    @Query(returns => Artist)
    async artist(@Arg('artistId') artistId: number): Promise<Artist|undefined> {
        return this.artistService.getArtist(artistId);
    }

    @FieldResolver()
    async albums(@Root() artist: Artist): Promise<Album[]> {
        return this.albumService.getAlbumsByArtistId(artist.id);
    }
}