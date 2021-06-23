import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';
import { Connection, Repository, getConnection } from 'typeorm';

import { Album, Artist } from '../entities';

@Service()
@Resolver(Album)
export class AlbumResolver {
    private artistRepository: Repository<Artist>;
    private albumRepository: Repository<Album>;

    constructor(connection: Connection = getConnection()) {
        this.artistRepository = connection.getRepository(Artist);
        this.albumRepository = connection.getRepository(Album);
    }

    @Query(returns => Album)
    async album(@Arg('albumId') albumId: number): Promise<Album|undefined> {
        return this.albumRepository.findOne(albumId);
    }

    @Query(returns => [ Album ])
    async albums(@Arg('artistId') artistId: number): Promise<Album[]> {
        return this.albumRepository.find({ artistId: artistId });
    }

    @FieldResolver()
    async artist(@Root() album: Album): Promise<Artist|undefined> {
        return this.artistRepository.findOne({ id: album.artistId });
    }
}