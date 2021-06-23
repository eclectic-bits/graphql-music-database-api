import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';

import { Album, Artist } from '../entities';
import { AlbumRepository, ArtistRepository } from '../repositories';

@Resolver(Album)
export class AlbumResolver {
    private albumRepository: AlbumRepository;
    private artistRepository: ArtistRepository

    constructor(albumRepository: AlbumRepository = new AlbumRepository(),
        artistRepository: ArtistRepository = new ArtistRepository()) {
        this.albumRepository = albumRepository;
        this.artistRepository = artistRepository;
    }

    @Query(returns => Album)
    async album(@Arg('albumId') albumId: number): Promise<Album|undefined> {
        return this.albumRepository.getAlbum(albumId);
    }

    @Query(returns => [ Album ])
    async albums(@Arg('artistId') artistId: number): Promise<Album[]> {
        return this.albumRepository.getAlbumsByArtistId(artistId);
    }

    @FieldResolver()
    async artist(@Root() album: Album): Promise<Artist|undefined> {
        return this.artistRepository.getArtist(album.artistId);
    }
}