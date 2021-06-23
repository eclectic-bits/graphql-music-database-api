import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';

import { Album, Artist } from '../entities';
import { AlbumRepository, ArtistRepository } from '../repositories';

@Resolver(Artist)
export class ArtistResolver {
    private artistRepository: ArtistRepository;
    private albumRepository: AlbumRepository;

    constructor(artistRepository: ArtistRepository = new ArtistRepository(),
        albumRepository: AlbumRepository = new AlbumRepository()) {
        this.artistRepository = artistRepository;
        this.albumRepository = albumRepository;
    }

    @Query(returns => Artist)
    async artist(@Arg('artistId') artistId: number): Promise<Artist|undefined> {
        return this.artistRepository.getArtist(artistId);
    }

    @Query(returns => [ Artist ])
    async artists(): Promise<Artist[]> {
        return this.artistRepository.getArtists();
    }

    @FieldResolver()
    async albums(@Root() artist: Artist): Promise<Album[]> {
        return this.albumRepository.getAlbumsByArtistId(artist.id);
    }
}