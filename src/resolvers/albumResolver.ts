import { Arg, Query, Resolver } from 'type-graphql';

import { Album } from '../entities';
import { AlbumRepository } from '../repositories';

@Resolver(Album)
export class AlbumResolver {
    private albumRepository: AlbumRepository;

    constructor(albumRepository: AlbumRepository = new AlbumRepository()) {
        this.albumRepository = albumRepository;
    }

    @Query(returns => Album)
    async album(@Arg('albumId') albumId: number) {
        return this.albumRepository.getAlbum(albumId);
    }
}