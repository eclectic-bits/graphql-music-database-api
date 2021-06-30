import { Arg, FieldResolver, Query, Resolver, ResolverInterface, Root } from 'type-graphql';

import { Album, Artist } from '../entities';
import { AlbumService, ArtistService } from '../interfaces';
import { SqliteAlbumService, SqliteArtistService } from '../services';

@Resolver(Artist)
export class ArtistResolver implements ResolverInterface<Artist> {
    constructor(private readonly artistService: ArtistService = new SqliteArtistService(),
        private readonly albumService: AlbumService = new SqliteAlbumService()) { }

    @Query(returns => [ Artist ])
    public async artists(): Promise<Artist[]> {
        return this.artistService.getArtists();
    }

    @Query(returns => Artist)
    public async artist(@Arg('artistId') artistId: number): Promise<Artist|undefined> {
        return this.artistService.getArtist(artistId);
    }

    @FieldResolver()
    public async albums(@Root() artist: Artist): Promise<Album[]> {
        return this.albumService.getAlbumsByArtistId(artist.id);
    }
}